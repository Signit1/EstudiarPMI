'use client'

import { useState } from 'react'
import { Upload, BookOpen, Search, Brain, Target, Award } from 'lucide-react'

export default function Home() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setPdfFile(file)
      setIsUploading(true)
      
      // Simular carga del PDF
      setTimeout(() => {
        setIsUploading(false)
        setUploadSuccess(true)
      }, 2000)
    }
  }

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Carga de PDF",
      description: "Sube tu guía del PMBOK 7 en PDF para extraer el contenido"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Búsqueda Inteligente",
      description: "Encuentra conceptos específicos rápidamente"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Herramientas de Estudio",
      description: "Flashcards, quizzes y resúmenes interactivos"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Seguimiento de Progreso",
      description: "Monitorea tu avance en el estudio"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificación PMI",
      description: "Prepárate para la certificación PMP"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-600">PMI Study System</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-primary-600 font-medium">Inicio</a>
              <a href="/study" className="text-gray-500 hover:text-primary-600">Estudiar</a>
              <a href="#" className="text-gray-500 hover:text-primary-600">Progreso</a>
              <a href="#" className="text-gray-500 hover:text-primary-600">Ayuda</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema de Estudio PMI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Domina el PMBOK 7 con nuestro sistema interactivo. Sube tu guía en PDF y comienza a estudiar de manera eficiente.
          </p>
          
          {/* PDF Upload Section */}
          <div className="max-w-md mx-auto">
            <div className="card">
              <div className="text-center">
                <Upload className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sube tu PDF del PMBOK 7</h3>
                <p className="text-gray-600 mb-4">
                  Arrastra tu archivo PDF aquí o haz clic para seleccionar
                </p>
                
                <label className="btn-primary cursor-pointer inline-block">
                  Seleccionar PDF
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                
                {isUploading && (
                  <div className="mt-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="text-sm text-gray-600 mt-2">Procesando PDF...</p>
                  </div>
                )}
                
                {uploadSuccess && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">¡PDF cargado exitosamente!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="text-primary-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Comienza tu estudio
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Sube tu PDF</h3>
              <p className="text-gray-600 text-sm">Carga tu guía del PMBOK 7</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Explora el contenido</h3>
              <p className="text-gray-600 text-sm">Navega por los conceptos clave</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Practica y aprende</h3>
              <p className="text-gray-600 text-sm">Usa las herramientas de estudio</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/study" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>Ir a Herramientas de Estudio</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
} 