const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/documents';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image, PDF, and document files are allowed!'));
    }
  }
});

// In-memory storage for documents (in production, use a database)
let documents = [
  {
    id: '1',
    userId: 'test@example.com',
    name: 'Pregnancy Test Report',
    type: 'medical',
    category: 'Lab Reports',
    uploadDate: '2024-01-15',
    size: '2.3 MB',
    status: 'verified',
    description: 'Blood test results from first trimester',
    fileUrl: '/uploads/documents/sample1.pdf'
  },
  {
    id: '2',
    userId: 'test@example.com',
    name: 'Aadhaar Card',
    type: 'government',
    category: 'Identity Documents',
    uploadDate: '2024-01-10',
    size: '1.1 MB',
    status: 'verified',
    description: 'Government issued identity proof',
    fileUrl: '/uploads/documents/sample2.pdf'
  }
];

// Test endpoint to verify API is working
router.get('/api/mediclocker/test', (req, res) => {
  console.log('Test endpoint called');
  console.log('Documents array:', documents);
  res.json({ 
    message: 'MedicLocker API is working!',
    documents: documents,
    documentCount: documents.length,
    timestamp: new Date().toISOString()
  });
});

// Get all documents for a user
router.get('/api/mediclocker/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    console.log('Fetching documents for userId:', userId);
    console.log('Available documents:', documents);
    console.log('Documents array length:', documents.length);
    
    // Always create mock documents for demo purposes
    // In production, you would filter by userId
    let userDocuments = documents.filter(doc => doc.userId === userId);
    
    // If no documents exist for this user, create mock documents
    if (userDocuments.length === 0) {
      console.log('No documents found for user, creating mock documents for:', userId);
      const mockDocs = [
        {
          id: '1',
          userId: userId,
          name: 'Pregnancy Test Report',
          type: 'medical',
          category: 'Lab Reports',
          uploadDate: '2024-01-15',
          size: '2.3 MB',
          status: 'verified',
          description: 'Blood test results from first trimester',
          fileUrl: '/uploads/documents/sample1.pdf'
        },
        {
          id: '2',
          userId: userId,
          name: 'Aadhaar Card',
          type: 'government',
          category: 'Identity Documents',
          uploadDate: '2024-01-10',
          size: '1.1 MB',
          status: 'verified',
          description: 'Government issued identity proof',
          fileUrl: '/uploads/documents/sample2.pdf'
        }
      ];
      
      // Add mock documents to the global array
      documents.push(...mockDocs);
      userDocuments = mockDocs;
    }
    
    console.log('Filtered documents for user:', userDocuments);
    console.log('Filtered documents length:', userDocuments.length);
    
    res.json(userDocuments);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

// Upload a new document
router.post('/api/mediclocker/upload', upload.single('document'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { userId, name, type, category, description } = req.body;
    console.log('Upload request:', { userId, name, type, category, description });
    
    const newDocument = {
      id: Date.now().toString(),
      userId,
      name: name || req.file.originalname,
      type: type || 'medical',
      category: category || 'Uploaded',
      uploadDate: new Date().toISOString().split('T')[0],
      size: `${(req.file.size / 1024 / 1024).toFixed(1)} MB`,
      status: 'verified',
      description: description || 'Recently uploaded document',
      fileUrl: `/uploads/documents/${req.file.filename}`
    };

    documents.push(newDocument);
    console.log('New document added:', newDocument);
    res.json(newDocument);
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).json({ error: 'Failed to upload document' });
  }
});

// Update document status
router.put('/api/mediclocker/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const document = documents.find(doc => doc.id === id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    document.status = status;
    res.json(document);
  } catch (error) {
    console.error('Error updating document status:', error);
    res.status(500).json({ error: 'Failed to update document status' });
  }
});

// Delete a document
router.delete('/api/mediclocker/:id', (req, res) => {
  try {
    const { id } = req.params;
    const documentIndex = documents.findIndex(doc => doc.id === id);
    
    if (documentIndex === -1) {
      return res.status(404).json({ error: 'Document not found' });
    }

    const document = documents[documentIndex];
    
    // Delete the actual file if it exists
    if (document.fileUrl && document.fileUrl.startsWith('/uploads/')) {
      const filePath = path.join(__dirname, '..', document.fileUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    documents.splice(documentIndex, 1);
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

// Download a document
router.get('/api/mediclocker/:id/download', (req, res) => {
  try {
    const { id } = req.params;
    console.log('Download request for document ID:', id);
    
    const document = documents.find(doc => doc.id === id);
    console.log('Found document:', document);
    
    if (!document) {
      console.log('Document not found for ID:', id);
      return res.status(404).json({ error: 'Document not found' });
    }

    if (!document.fileUrl || !document.fileUrl.startsWith('/uploads/')) {
      console.log('Invalid file URL:', document.fileUrl);
      return res.status(404).json({ error: 'File not found' });
    }

    // Fix the file path - remove the leading slash and use correct path
    const filePath = path.join(__dirname, document.fileUrl.substring(1));
    console.log('Attempting to download file from:', filePath);
    
    if (!fs.existsSync(filePath)) {
      console.log('File does not exist at path:', filePath);
      
      // For mock documents, create a simple text file if it doesn't exist
      if (document.name.includes('Pregnancy Test Report') || document.name.includes('Aadhaar Card')) {
        console.log('Creating mock file for:', document.name);
        const mockContent = `This is a mock ${document.name} for testing purposes.\nDate: ${document.uploadDate}\nStatus: ${document.status}\nDescription: ${document.description}`;
        fs.writeFileSync(filePath, mockContent);
        console.log('Mock file created successfully');
      } else {
        return res.status(404).json({ error: 'File not found on server' });
      }
    }

    console.log('File found, sending download response');
    res.download(filePath, document.name);
  } catch (error) {
    console.error('Error downloading document:', error);
    res.status(500).json({ error: 'Failed to download document' });
  }
});

// Get document statistics
router.get('/api/mediclocker/:userId/stats', (req, res) => {
  try {
    const { userId } = req.params;
    console.log('Fetching stats for userId:', userId);
    
    // For demo purposes, use all documents
    // In production, you would filter by userId
    const userDocuments = documents;
    console.log('User documents for stats:', userDocuments);
    
    const stats = {
      total: userDocuments.length,
      verified: userDocuments.filter(doc => doc.status === 'verified').length,
      pending: userDocuments.filter(doc => doc.status === 'pending').length,
      expired: userDocuments.filter(doc => doc.status === 'expired').length,
      storageUsed: userDocuments.reduce((total, doc) => {
        const size = parseFloat(doc.size.replace(' MB', ''));
        return total + size;
      }, 0)
    };

    console.log('Calculated stats:', stats);
    res.json(stats);
  } catch (error) {
    console.error('Error fetching document stats:', error);
    res.status(500).json({ error: 'Failed to fetch document statistics' });
  }
});

module.exports = router; 