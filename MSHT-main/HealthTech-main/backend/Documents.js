const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

// Document Schema
const DocumentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['medical', 'personal', 'government', 'insurance'], default: 'medical' },
  category: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  size: { type: String, required: true },
  status: { type: String, enum: ['verified', 'pending', 'expired'], default: 'pending' },
  description: { type: String },
  fileUrl: { type: String },
  originalName: { type: String },
  mimetype: { type: String },
  metadata: {
    doctor: String,
    hospital: String,
    date: Date,
    documentType: String,
  },
  createdAt: { type: Date, default: Date.now }
});

const Document = mongoose.model('Document', DocumentSchema);

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

// Get all documents for a user
router.get('/api/documents/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const documents = await Document.find({ userId }).sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

// Upload a new document
router.post('/api/documents/upload', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { userId, name, type, category, description } = req.body;
    
    const newDocument = new Document({
      userId,
      name: name || req.file.originalname,
      type: type || 'medical',
      category: category || 'Uploaded',
      size: `${(req.file.size / 1024 / 1024).toFixed(1)} MB`,
      status: 'pending',
      description: description || 'Recently uploaded document',
      fileUrl: `/uploads/documents/${req.file.filename}`,
      originalName: req.file.originalname,
      mimetype: req.file.mimetype
    });

    await newDocument.save();
    res.json(newDocument);
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).json({ error: 'Failed to upload document' });
  }
});

// Update document status
router.put('/api/documents/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const document = await Document.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true }
    );
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    res.json(document);
  } catch (error) {
    console.error('Error updating document status:', error);
    res.status(500).json({ error: 'Failed to update document status' });
  }
});

// Delete a document
router.delete('/api/documents/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Delete the actual file if it exists
    if (document.fileUrl && document.fileUrl.startsWith('/uploads/')) {
      const filePath = path.join(__dirname, '..', document.fileUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Document.findByIdAndDelete(id);
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

// Download a document
router.get('/api/documents/:id/download', async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    if (!document.fileUrl || !document.fileUrl.startsWith('/uploads/')) {
      return res.status(404).json({ error: 'File not found' });
    }

    const filePath = path.join(__dirname, '..', document.fileUrl);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found on server' });
    }

    res.download(filePath, document.name);
  } catch (error) {
    console.error('Error downloading document:', error);
    res.status(500).json({ error: 'Failed to download document' });
  }
});

// Get document statistics
router.get('/api/documents/:userId/stats', async (req, res) => {
  try {
    const { userId } = req.params;
    const documents = await Document.find({ userId });
    
    const stats = {
      total: documents.length,
      verified: documents.filter(doc => doc.status === 'verified').length,
      pending: documents.filter(doc => doc.status === 'pending').length,
      expired: documents.filter(doc => doc.status === 'expired').length,
      storageUsed: documents.reduce((total, doc) => {
        const size = parseFloat(doc.size.replace(' MB', ''));
        return total + size;
      }, 0)
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching document stats:', error);
    res.status(500).json({ error: 'Failed to fetch document statistics' });
  }
});

// Search documents
router.get('/api/documents/:userId/search', async (req, res) => {
  try {
    const { userId } = req.params;
    const { q, type, status } = req.query;
    
    let query = { userId };
    
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ];
    }
    
    if (type && type !== 'all') {
      query.type = type;
    }
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    const documents = await Document.find(query).sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    console.error('Error searching documents:', error);
    res.status(500).json({ error: 'Failed to search documents' });
  }
});

module.exports = router;