import React, { useState, useEffect } from 'react';

type Document = {
  _id: string;
  originalName: string;
  fileUrl: string;
  metadata: {
    doctor: string;
    hospital: string;
    date: string;
    type: string;
  };
  createdAt: string;
};

export default function MedicalRecords() {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState({ doctor: '', hospital: '', date: '', type: '' });
  const [documents, setDocuments] = useState<Document[]>([]);

  // Replace with real userId from auth
  const userId = '000000000000000000000000';

  useEffect(() => {
    fetch(`http://localhost:4000/api/documents?userId=${userId}`)
      .then(res => res.json())
      .then(setDocuments);
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('document', file);
    formData.append('userId', userId);
    Object.entries(metadata).forEach(([k, v]) => formData.append(k, v));
    await fetch('http://localhost:4000/api/documents/upload', {
      method: 'POST',
      body: formData,
    });
    // Refresh list
    fetch(`http://localhost:4000/api/documents?userId=${userId}`)
      .then(res => res.json())
      .then(setDocuments);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Medical Record</h2>
      <form onSubmit={handleUpload} className="space-y-3">
        <input type="file" accept='.pdf,.jpeg,.jpg,.dcm' onChange={e => setFile(e.target.files?.[0] || null)} required />
        <input type="text" placeholder="Doctor Name" value={metadata.doctor} onChange={e => setMetadata(m => ({ ...m, doctor: e.target.value }))} required />
        <input type="text" placeholder="Hospital" value={metadata.hospital} onChange={e => setMetadata(m => ({ ...m, hospital: e.target.value }))} required />
        <input type="date" placeholder="Date" value={metadata.date} onChange={e => setMetadata(m => ({ ...m, date: e.target.value }))} required />
        <select value={metadata.type} onChange={e => setMetadata(m => ({ ...m, type: e.target.value }))} required>
          <option value="">Select Type</option>
          <option value="prescription">Prescription</option>
          <option value="report">Report</option>
          <option value="dicom">DICOM</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
      </form>

      <h3 className="text-xl font-semibold mt-8 mb-2">My Documents</h3>
      <ul>
        {documents.map(doc => (
          <li key={doc._id} className="mb-2 flex items-center justify-between border-b py-2">
            <span>
              <b>{doc.metadata.type}</b> - {doc.originalName} <br />
              <small>{doc.metadata.doctor}, {doc.metadata.hospital}, {new Date(doc.metadata.date).toLocaleDateString()}</small>
            </span>
            <a href={`http://localhost:4000/api/documents/${doc._id}/download`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
}