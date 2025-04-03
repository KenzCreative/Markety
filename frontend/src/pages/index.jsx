import React, { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [file, setFile] = useState(null)
  const [response, setResponse] = useState('')

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post(
        'https://https://markety-backend.onrender.com/upload', 
        formData
      )
      setResponse(res.data.message || JSON.stringify(res.data))
    } catch (error) {
      setResponse('Upload failed: ' + error.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">📊 Markety Insights</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
        Upload Report
      </button>
      <p className="mt-6 text-gray-700 whitespace-pre-wrap">{response}</p>
    </div>
  )
}
