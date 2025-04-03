import React from 'react';
import FileUploader from '../components/FileUploader';

export default function Dashboard() {
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-light p-8">
      <h1 className="text-3xl font-heading text-primary mb-6">Welcome to Markety!</h1>
      <FileUploader onFileUpload={handleFileUpload} />
    </div>
  );
}