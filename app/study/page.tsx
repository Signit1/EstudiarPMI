'use client'

import StudyTools from '../../components/StudyTools'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-500 hover:text-primary-600">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-primary-600">Herramientas de Estudio</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-primary-600">Inicio</Link>
              <Link href="/study" className="text-primary-600 font-medium">Estudiar</Link>
              <a href="#" className="text-gray-500 hover:text-primary-600">Progreso</a>
              <a href="#" className="text-gray-500 hover:text-primary-600">Ayuda</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prepárate para PMP con PMBOK 7
          </h2>
          <p className="text-lg text-gray-600">
            Utiliza estas herramientas interactivas para dominar los conceptos clave del PMBOK 7
          </p>
        </div>

        <StudyTools />
      </main>
    </div>
  )
} 