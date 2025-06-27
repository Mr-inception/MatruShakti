const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const Document = require('./models/Document');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files

mongoose.connect('mongodb://localhost:27017/medlocker', { useNewUrlParser: true, useUnifiedTopology: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Accept PDF, JPEG, DICOM
    const allowed = ['application/pdf', 'image/jpeg', 'application/dicom', 'application/dicom+json', 'application/octet-stream'];
    if (allowed.includes(file.mimetype) || file.originalname.endsWith('.dcm')) cb(null, true);
    else cb(new Error('Only PDF, JPEG, and DICOM files are allowed!'));
  }
});

// Upload endpoint
app.post('/api/documents/upload', upload.single('document'), async (req, res) => {
  // TODO: Replace with real userId from auth
  const userId = req.body.userId || '000000000000000000000000';
  const { doctor, hospital, date, type } = req.body;
  const doc = new Document({
    userId,
    fileUrl: req.file.path,
    originalName: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    metadata: { doctor, hospital, date, type }
  });
  await doc.save();
  res.json(doc);
});

// List documents
app.get('/api/documents', async (req, res) => {
  // TODO: Filter by userId from auth
  const docs = await Document.find({ userId: req.query.userId || '000000000000000000000000' }).sort({ createdAt: -1 });
  res.json(docs);
});

// Download document
app.get('/api/documents/:id/download', async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).send('Not found');
  res.download(path.resolve(doc.fileUrl), doc.originalName);
});

app.listen(4000, () => console.log('Server started on http://localhost:4000'));