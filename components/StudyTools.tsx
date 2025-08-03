'use client'

import { useState } from 'react'
import { RotateCcw, Check, X, BookOpen, Brain, Target } from 'lucide-react'
import { flashcards as baseFlashcards, quiz as baseQuiz } from '../data/studyData'
import { additionalFlashcards, additionalQuiz } from '../data/studyDataExtended'
import { finalFlashcards, finalQuiz } from '../data/studyDataFinal'
import { completeFlashcards, completeQuiz } from '../data/studyDataComplete'

interface Flashcard {
  id: number
  question: string
  answer: string
  category: string
}

interface Quiz {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function StudyTools() {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz' | 'progress'>('flashcards')
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showQuizAnswer, setShowQuizAnswer] = useState(false)
  const [score, setScore] = useState(0)

  // Combinar todas las flashcards (400 total)
  const flashcards: Flashcard[] = [...baseFlashcards, ...additionalFlashcards, ...finalFlashcards, ...completeFlashcards]

  // Combinar todos los quiz (200 total)
  const quiz: Quiz[] = [...baseQuiz, ...additionalQuiz, ...finalQuiz, ...completeQuiz]

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setShowAnswer(false)
    }
  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setShowAnswer(false)
    }
  }

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowQuizAnswer(true)
    
    if (answerIndex === quiz[currentQuizIndex].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuiz = () => {
    if (currentQuizIndex < quiz.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
      setSelectedAnswer(null)
      setShowQuizAnswer(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuizIndex(0)
    setSelectedAnswer(null)
    setShowQuizAnswer(false)
    setScore(0)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            activeTab === 'flashcards' 
              ? 'bg-white shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Flashcards ({flashcards.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            activeTab === 'quiz' 
              ? 'bg-white shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Quiz ({quiz.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('progress')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            activeTab === 'progress' 
              ? 'bg-white shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Progreso</span>
        </button>
      </div>

      {/* Flashcards */}
      {activeTab === 'flashcards' && (
        <div className="card">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Flashcards PMBOK 7</h2>
            <p className="text-gray-600">
              Tarjeta {currentCardIndex + 1} de {flashcards.length}
            </p>
            <p className="text-sm text-primary-600 mt-2">
              Categoría: {flashcards[currentCardIndex].category}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 min-h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-primary-600 mb-2">
                  {flashcards[currentCardIndex].category}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {flashcards[currentCardIndex].question}
                </h3>
                
                {showAnswer && (
                  <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                    <p className="text-gray-800">{flashcards[currentCardIndex].answer}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={handlePreviousCard}
                disabled={currentCardIndex === 0}
                className="btn-secondary disabled:opacity-50"
              >
                Anterior
              </button>
              
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="btn-primary"
              >
                {showAnswer ? 'Ocultar Respuesta' : 'Mostrar Respuesta'}
              </button>
              
              <button
                onClick={handleNextCard}
                disabled={currentCardIndex === flashcards.length - 1}
                className="btn-secondary disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz */}
      {activeTab === 'quiz' && (
        <div className="card">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Quiz PMBOK 7</h2>
            <p className="text-gray-600">
              Pregunta {currentQuizIndex + 1} de {quiz.length}
            </p>
            <p className="text-sm text-primary-600">
              Puntuación: {score}/{quiz.length}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 min-h-64">
              <h3 className="text-xl font-semibold mb-6">
                {quiz[currentQuizIndex].question}
              </h3>

              <div className="space-y-3">
                {quiz[currentQuizIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedAnswer === index
                        ? index === quiz[currentQuizIndex].correctAnswer
                          ? 'bg-green-50 border-green-300'
                          : 'bg-red-50 border-red-300'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    } disabled:opacity-50`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedAnswer === index && (
                        <span>
                          {index === quiz[currentQuizIndex].correctAnswer ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <X className="w-5 h-5 text-red-600" />
                          )}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showQuizAnswer && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-800">
                    <strong>Explicación:</strong> {quiz[currentQuizIndex].explanation}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={resetQuiz}
                className="btn-secondary"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reiniciar Quiz
              </button>
              
              {showQuizAnswer && currentQuizIndex < quiz.length - 1 && (
                <button
                  onClick={handleNextQuiz}
                  className="btn-primary"
                >
                  Siguiente Pregunta
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress */}
      {activeTab === 'progress' && (
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-center">Tu Progreso</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">0</div>
              <div className="text-gray-600">Flashcards Completadas</div>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-gray-600">Puntuación Quiz</div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600">Días de Estudio</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Objetivos de Estudio</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>Completar {flashcards.length} flashcards</span>
                <span className="text-sm text-gray-500">0/{flashcards.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>Obtener 80% en quiz</span>
                <span className="text-sm text-gray-500">0%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>Estudiar 7 días consecutivos</span>
                <span className="text-sm text-gray-500">0/7</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 