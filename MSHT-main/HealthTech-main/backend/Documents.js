const mongoose = require('mongoose');
const DocumentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: String,
  originalName: String,
  mimetype: String,
  size: Number,
  metadata: {
    doctor: String,
    hospital: String,
    date: Date,
    type: String, // e.g., 'prescription', 'report', 'dicom'
  },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Document', DocumentSchema);