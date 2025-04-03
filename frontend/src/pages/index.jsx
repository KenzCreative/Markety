import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        🎉 Welcome to Markety!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your AI marketing assistant is up and running.
      </p>
      <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-500">
        Get Started
      </button>
    </div>
  )
}