'use client'

import { useState } from 'react'
import { RotateCcw, Check, X, BookOpen, Brain, Target } from 'lucide-react'

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

  // Flashcards expandidas del PMBOK 7
  const flashcards: Flashcard[] = [
    {
      id: 1,
      question: "¿Qué es un proyecto según el PMBOK 7?",
      answer: "Un proyecto es un esfuerzo temporal emprendido para crear un producto, servicio o resultado único.",
      category: "Definiciones"
    },
    {
      id: 2,
      question: "¿Cuáles son los 12 principios del PMBOK 7?",
      answer: "1. Ser un buen mayordomo 2. Crear un entorno colaborativo 3. Involucrar efectivamente a los interesados 4. Enfocarse en el valor 5. Pensar sistémicamente 6. Demostrar liderazgo 7. Adaptarse al contexto 8. Construir calidad 9. Navegar la complejidad 10. Optimizar el riesgo 11. Abrazar la adaptabilidad 12. Habilitar el cambio",
      category: "Principios"
    },
    {
      id: 3,
      question: "¿Qué son los dominios de rendimiento?",
      answer: "Los dominios de rendimiento son áreas de actividad que definen los aspectos clave para lograr resultados exitosos del proyecto.",
      category: "Dominios"
    },
    {
      id: 4,
      question: "¿Cuáles son los 8 dominios de rendimiento del PMBOK 7?",
      answer: "1. Stakeholders 2. Team 3. Development Approach and Life Cycle 4. Planning 5. Project Work 6. Delivery 7. Measurement 8. Uncertainty",
      category: "Dominios"
    },
    {
      id: 5,
      question: "¿Qué es la gestión de interesados (Stakeholders)?",
      answer: "Es el proceso de identificar, analizar y gestionar las necesidades y expectativas de todas las personas o grupos que pueden afectar o ser afectados por el proyecto.",
      category: "Stakeholders"
    },
    {
      id: 6,
      question: "¿Qué es un interesado (stakeholder)?",
      answer: "Un individuo, grupo u organización que puede afectar, ser afectado o percibirse como afectado por una decisión, actividad o resultado del proyecto.",
      category: "Stakeholders"
    },
    {
      id: 7,
      question: "¿Cuáles son las actividades clave del dominio Team?",
      answer: "Establecer la estructura del equipo, definir roles y responsabilidades, crear un entorno de trabajo colaborativo, liderar el equipo y gestionar el desarrollo del equipo.",
      category: "Team"
    },
    {
      id: 8,
      question: "¿Qué es el desarrollo iterativo?",
      answer: "Un enfoque de desarrollo que produce entregables incrementales, permitiendo retroalimentación temprana y adaptación continua.",
      category: "Development Approach"
    },
    {
      id: 9,
      question: "¿Qué es el desarrollo incremental?",
      answer: "Un enfoque que entrega funcionalidad completa en incrementos, donde cada incremento agrega valor al producto anterior.",
      category: "Development Approach"
    },
    {
      id: 10,
      question: "¿Qué es la planificación adaptativa?",
      answer: "Un enfoque de planificación que permite cambios y ajustes continuos basados en retroalimentación y aprendizaje.",
      category: "Planning"
    },
    {
      id: 11,
      question: "¿Qué es la planificación predictiva?",
      answer: "Un enfoque de planificación que establece un plan detallado al inicio del proyecto y lo sigue con cambios mínimos.",
      category: "Planning"
    },
    {
      id: 12,
      question: "¿Qué es la gestión de la incertidumbre?",
      answer: "El proceso de identificar, analizar y responder a eventos inciertos que pueden afectar los objetivos del proyecto.",
      category: "Uncertainty"
    },
    {
      id: 13,
      question: "¿Qué es un riesgo?",
      answer: "Un evento o condición incierta que, si ocurre, tiene un efecto positivo o negativo en uno o más objetivos del proyecto.",
      category: "Uncertainty"
    },
    {
      id: 14,
      question: "¿Qué es la gestión de la calidad?",
      answer: "El proceso de asegurar que el proyecto y sus entregables cumplan con los requisitos de calidad establecidos.",
      category: "Quality"
    },
    {
      id: 15,
      question: "¿Qué es la medición del rendimiento?",
      answer: "El proceso de recopilar, analizar y reportar información sobre el progreso y rendimiento del proyecto.",
      category: "Measurement"
    },
    {
      id: 16,
      question: "¿Qué es un KPI (Indicador Clave de Rendimiento)?",
      answer: "Una métrica cuantificable utilizada para evaluar el éxito de un proyecto en relación con sus objetivos.",
      category: "Measurement"
    },
    {
      id: 17,
      question: "¿Qué es la gestión del valor?",
      answer: "El proceso de maximizar el valor entregado por el proyecto mientras se optimizan los recursos utilizados.",
      category: "Value"
    },
    {
      id: 18,
      question: "¿Qué es el pensamiento sistémico?",
      answer: "Un enfoque que considera el proyecto como parte de un sistema más grande, analizando las interrelaciones y efectos en cascada.",
      category: "Systems Thinking"
    },
    {
      id: 19,
      question: "¿Qué es la complejidad en gestión de proyectos?",
      answer: "La característica de un proyecto que hace que sea difícil de entender, predecir o gestionar debido a múltiples factores interdependientes.",
      category: "Complexity"
    },
    {
      id: 20,
      question: "¿Qué es la adaptabilidad en gestión de proyectos?",
      answer: "La capacidad del equipo y la organización para responder efectivamente a cambios y condiciones inciertas.",
      category: "Adaptability"
    },
    {
      id: 21,
      question: "¿Qué es la gestión del cambio organizacional?",
      answer: "El proceso de gestionar la transición de la organización desde el estado actual hasta el estado futuro deseado.",
      category: "Change Management"
    },
    {
      id: 22,
      question: "¿Qué es la comunicación efectiva en proyectos?",
      answer: "El proceso de intercambiar información de manera clara, oportuna y apropiada para todos los interesados del proyecto.",
      category: "Communication"
    },
    {
      id: 23,
      question: "¿Qué es la gestión de conflictos?",
      answer: "El proceso de identificar, analizar y resolver desacuerdos entre miembros del equipo o interesados.",
      category: "Team Management"
    },
    {
      id: 24,
      question: "¿Qué es la motivación del equipo?",
      answer: "El proceso de crear un entorno donde los miembros del equipo se sientan comprometidos y entusiasmados con el trabajo del proyecto.",
      category: "Team Management"
    },
    {
      id: 25,
      question: "¿Qué es la delegación efectiva?",
      answer: "El proceso de asignar responsabilidades y autoridad a miembros del equipo para completar tareas específicas del proyecto.",
      category: "Leadership"
    },
    {
      id: 26,
      question: "¿Qué es la gestión de la comunicación?",
      answer: "El proceso de planificar, recopilar, crear, distribuir, almacenar, recuperar, gestionar, controlar, supervisar y disponer de la información del proyecto.",
      category: "Communication"
    },
    {
      id: 27,
      question: "¿Qué es la gestión de la integración?",
      answer: "El proceso de coordinar todos los elementos del proyecto para asegurar que se completen correctamente.",
      category: "Integration"
    },
    {
      id: 28,
      question: "¿Qué es la gestión del alcance?",
      answer: "El proceso de definir y controlar qué se incluye y qué no se incluye en el proyecto.",
      category: "Scope"
    },
    {
      id: 29,
      question: "¿Qué es la gestión del cronograma?",
      answer: "El proceso de planificar, desarrollar, gestionar, ejecutar y controlar el cronograma del proyecto.",
      category: "Schedule"
    },
    {
      id: 30,
      question: "¿Qué es la gestión de costos?",
      answer: "El proceso de planificar, estimar, presupuestar, financiar, gestionar y controlar los costos del proyecto.",
      category: "Cost"
    },
    {
      id: 31,
      question: "¿Qué es la gestión de recursos?",
      answer: "El proceso de identificar, adquirir y gestionar los recursos necesarios para completar el proyecto exitosamente.",
      category: "Resources"
    },
    {
      id: 32,
      question: "¿Qué es la gestión de adquisiciones?",
      answer: "El proceso de comprar o adquirir productos, servicios o resultados necesarios para el proyecto.",
      category: "Procurement"
    },
    {
      id: 33,
      question: "¿Qué es la gestión de la seguridad?",
      answer: "El proceso de identificar, evaluar y mitigar los riesgos de seguridad del proyecto.",
      category: "Security"
    },
    {
      id: 34,
      question: "¿Qué es la gestión de la sostenibilidad?",
      answer: "El proceso de considerar los impactos ambientales, sociales y económicos del proyecto a largo plazo.",
      category: "Sustainability"
    },
    {
      id: 35,
      question: "¿Qué es la gestión de la innovación?",
      answer: "El proceso de fomentar y gestionar nuevas ideas y enfoques para mejorar el proyecto.",
      category: "Innovation"
    },
    {
      id: 36,
      question: "¿Qué es la gestión de la diversidad?",
      answer: "El proceso de valorar y aprovechar las diferencias individuales y culturales en el equipo del proyecto.",
      category: "Diversity"
    },
    {
      id: 37,
      question: "¿Qué es la gestión de la inclusión?",
      answer: "El proceso de crear un entorno donde todos los miembros del equipo se sientan valorados y respetados.",
      category: "Inclusion"
    },
    {
      id: 38,
      question: "¿Qué es la gestión de la ética?",
      answer: "El proceso de asegurar que todas las actividades del proyecto se realicen de manera ética y responsable.",
      category: "Ethics"
    },
    {
      id: 39,
      question: "¿Qué es la gestión de la transparencia?",
      answer: "El proceso de compartir información relevante del proyecto de manera abierta y honesta.",
      category: "Transparency"
    },
    {
      id: 40,
      question: "¿Qué es la gestión de la responsabilidad?",
      answer: "El proceso de asegurar que cada miembro del equipo sea responsable de sus acciones y resultados.",
      category: "Accountability"
    },
    {
      id: 41,
      question: "¿Qué es la gestión de la resiliencia?",
      answer: "El proceso de desarrollar la capacidad del equipo para recuperarse rápidamente de los desafíos.",
      category: "Resilience"
    },
    {
      id: 42,
      question: "¿Qué es la gestión de la agilidad?",
      answer: "El proceso de responder rápidamente a los cambios y adaptarse a nuevas condiciones.",
      category: "Agility"
    },
    {
      id: 43,
      question: "¿Qué es la gestión de la colaboración?",
      answer: "El proceso de trabajar juntos de manera efectiva para lograr objetivos comunes del proyecto.",
      category: "Collaboration"
    },
    {
      id: 44,
      question: "¿Qué es la gestión de la confianza?",
      answer: "El proceso de construir y mantener relaciones de confianza entre todos los interesados del proyecto.",
      category: "Trust"
    },
    {
      id: 45,
      question: "¿Qué es la gestión de la empatía?",
      answer: "El proceso de comprender y considerar las perspectivas y sentimientos de otros interesados.",
      category: "Empathy"
    },
    {
      id: 46,
      question: "¿Qué es la gestión de la humildad?",
      answer: "El proceso de reconocer las limitaciones propias y estar abierto a aprender de otros.",
      category: "Humility"
    },
    {
      id: 47,
      question: "¿Qué es la gestión de la curiosidad?",
      answer: "El proceso de mantener un interés activo en aprender y explorar nuevas posibilidades.",
      category: "Curiosity"
    },
    {
      id: 48,
      question: "¿Qué es la gestión de la creatividad?",
      answer: "El proceso de generar ideas innovadoras y soluciones creativas para los desafíos del proyecto.",
      category: "Creativity"
    },
    {
      id: 49,
      question: "¿Qué es la gestión de la excelencia?",
      answer: "El proceso de esforzarse por lograr los más altos estándares de calidad en todas las actividades del proyecto.",
      category: "Excellence"
    }
  ]

  // Quiz expandido del PMBOK 7
  const quiz: Quiz[] = [
    {
      id: 1,
      question: "¿Cuál de los siguientes NO es un principio del PMBOK 7?",
      options: [
        "Ser un buen mayordomo",
        "Crear un entorno colaborativo", 
        "Maximizar el riesgo",
        "Enfocarse en el valor"
      ],
      correctAnswer: 2,
      explanation: "Maximizar el riesgo NO es un principio. El principio correcto es 'Optimizar el riesgo'."
    },
    {
      id: 2,
      question: "¿Cuántos dominios de rendimiento hay en el PMBOK 7?",
      options: ["6", "8", "10", "12"],
      correctAnswer: 1,
      explanation: "Hay 8 dominios de rendimiento en el PMBOK 7."
    },
    {
      id: 3,
      question: "¿Cuál de los siguientes es un dominio de rendimiento del PMBOK 7?",
      options: [
        "Gestión de Riesgos",
        "Stakeholders",
        "Gestión de Calidad",
        "Gestión de Comunicaciones"
      ],
      correctAnswer: 1,
      explanation: "Stakeholders es uno de los 8 dominios de rendimiento del PMBOK 7."
    },
    {
      id: 4,
      question: "¿Qué significa 'Ser un buen mayordomo' en el contexto del PMBOK 7?",
      options: [
        "Ser responsable de los recursos del proyecto",
        "Ser responsable de los recursos financieros",
        "Ser responsable de los recursos asignados y actuar de manera ética",
        "Ser responsable solo del equipo"
      ],
      correctAnswer: 2,
      explanation: "Ser un buen mayordomo significa ser responsable de los recursos asignados y actuar de manera ética, transparente y responsable."
    },
    {
      id: 5,
      question: "¿Cuál es la diferencia entre desarrollo iterativo e incremental?",
      options: [
        "No hay diferencia, son lo mismo",
        "Iterativo entrega funcionalidad completa, incremental entrega partes",
        "Iterativo entrega partes, incremental entrega funcionalidad completa",
        "Iterativo es más rápido que incremental"
      ],
      correctAnswer: 2,
      explanation: "El desarrollo iterativo entrega partes del producto, mientras que el incremental entrega funcionalidad completa en cada incremento."
    },
    {
      id: 6,
      question: "¿Qué es la planificación adaptativa?",
      options: [
        "Planificar todo al inicio del proyecto",
        "Planificar solo las tareas críticas",
        "Permitir cambios y ajustes continuos basados en retroalimentación",
        "Planificar solo cuando sea necesario"
      ],
      correctAnswer: 2,
      explanation: "La planificación adaptativa permite cambios y ajustes continuos basados en retroalimentación y aprendizaje."
    },
    {
      id: 7,
      question: "¿Cuál de los siguientes NO es un enfoque de desarrollo de ciclo de vida?",
      options: [
        "Predictivo",
        "Iterativo",
        "Incremental",
        "Reactivo"
      ],
      correctAnswer: 3,
      explanation: "Reactivo NO es un enfoque de desarrollo de ciclo de vida reconocido en el PMBOK 7."
    },
    {
      id: 8,
      question: "¿Qué es un interesado (stakeholder)?",
      options: [
        "Solo el patrocinador del proyecto",
        "Solo el equipo del proyecto",
        "Cualquier persona que pueda afectar o ser afectada por el proyecto",
        "Solo los clientes del proyecto"
      ],
      correctAnswer: 2,
      explanation: "Un interesado es cualquier individuo, grupo u organización que puede afectar, ser afectado o percibirse como afectado por el proyecto."
    },
    {
      id: 9,
      question: "¿Cuál es el objetivo principal de la gestión de la incertidumbre?",
      options: [
        "Eliminar todos los riesgos",
        "Identificar, analizar y responder a eventos inciertos",
        "Ignorar los riesgos menores",
        "Transferir todos los riesgos a terceros"
      ],
      correctAnswer: 1,
      explanation: "El objetivo es identificar, analizar y responder a eventos inciertos que pueden afectar los objetivos del proyecto."
    },
    {
      id: 10,
      question: "¿Qué es el pensamiento sistémico en gestión de proyectos?",
      options: [
        "Pensar solo en el proyecto",
        "Considerar el proyecto como parte de un sistema más grande",
        "Pensar en términos de sistemas informáticos",
        "Pensar de manera sistemática"
      ],
      correctAnswer: 1,
      explanation: "El pensamiento sistémico considera el proyecto como parte de un sistema más grande, analizando las interrelaciones y efectos en cascada."
    },
    {
      id: 11,
      question: "¿Cuál de los siguientes es un KPI típico en gestión de proyectos?",
      options: [
        "Número de reuniones realizadas",
        "Cumplimiento del cronograma",
        "Número de documentos creados",
        "Número de correos enviados"
      ],
      correctAnswer: 1,
      explanation: "El cumplimiento del cronograma es un KPI típico que mide el rendimiento del proyecto."
    },
    {
      id: 12,
      question: "¿Qué significa 'Optimizar el riesgo' en el PMBOK 7?",
      options: [
        "Eliminar todos los riesgos",
        "Aceptar todos los riesgos",
        "Equilibrar la exposición al riesgo con las oportunidades",
        "Transferir todos los riesgos"
      ],
      correctAnswer: 2,
      explanation: "Optimizar el riesgo significa equilibrar la exposición al riesgo con las oportunidades para maximizar el valor del proyecto."
    },
    {
      id: 13,
      question: "¿Cuál es el propósito de la medición del rendimiento?",
      options: [
        "Culpar a los miembros del equipo",
        "Recopilar, analizar y reportar información sobre el progreso",
        "Reducir costos",
        "Acelerar el proyecto"
      ],
      correctAnswer: 1,
      explanation: "El propósito es recopilar, analizar y reportar información sobre el progreso y rendimiento del proyecto."
    },
    {
      id: 14,
      question: "¿Qué es la adaptabilidad en gestión de proyectos?",
      options: [
        "Cambiar el proyecto constantemente",
        "La capacidad de responder efectivamente a cambios e incertidumbre",
        "Adaptar el presupuesto",
        "Adaptar solo el cronograma"
      ],
      correctAnswer: 1,
      explanation: "La adaptabilidad es la capacidad del equipo y la organización para responder efectivamente a cambios y condiciones inciertas."
    },
    {
      id: 15,
      question: "¿Cuál de los siguientes es un aspecto de la gestión del valor?",
      options: [
        "Minimizar costos a toda costa",
        "Maximizar el valor entregado mientras se optimizan los recursos",
        "Maximizar solo los beneficios financieros",
        "Ignorar los costos del proyecto"
      ],
      correctAnswer: 1,
      explanation: "La gestión del valor busca maximizar el valor entregado por el proyecto mientras se optimizan los recursos utilizados."
    },
    {
      id: 16,
      question: "¿Cuál de los siguientes NO es un dominio de rendimiento del PMBOK 7?",
      options: [
        "Stakeholders",
        "Team",
        "Risk Management",
        "Planning"
      ],
      correctAnswer: 2,
      explanation: "Risk Management NO es un dominio de rendimiento. Los dominios incluyen Uncertainty, no Risk Management."
    },
    {
      id: 17,
      question: "¿Qué es la gestión de la calidad en el contexto del PMBOK 7?",
      options: [
        "Solo inspeccionar productos finales",
        "Asegurar que el proyecto y sus entregables cumplan con los requisitos",
        "Reducir costos de calidad",
        "Cumplir solo con estándares mínimos"
      ],
      correctAnswer: 1,
      explanation: "La gestión de la calidad asegura que el proyecto y sus entregables cumplan con los requisitos de calidad establecidos."
    },
    {
      id: 18,
      question: "¿Cuál es el enfoque correcto para la gestión de interesados?",
      options: [
        "Ignorar a los interesados externos",
        "Identificar, analizar y gestionar las necesidades de todos los interesados",
        "Solo comunicarse con el patrocinador",
        "Excluir a los interesados negativos"
      ],
      correctAnswer: 1,
      explanation: "La gestión de interesados debe identificar, analizar y gestionar las necesidades de todos los interesados relevantes."
    },
    {
      id: 19,
      question: "¿Qué significa 'Crear un entorno colaborativo'?",
      options: [
        "Trabajar solo individualmente",
        "Fomentar la competencia entre equipos",
        "Crear un ambiente donde el equipo trabaje juntos efectivamente",
        "Ignorar las diferencias del equipo"
      ],
      correctAnswer: 2,
      explanation: "Crear un entorno colaborativo significa fomentar un ambiente donde el equipo trabaje juntos de manera efectiva y cooperativa."
    },
    {
      id: 20,
      question: "¿Cuál es la importancia del pensamiento sistémico?",
      options: [
        "Ignorar el contexto del proyecto",
        "Considerar solo los aspectos técnicos",
        "Entender las interrelaciones y efectos en cascada",
        "Enfocarse solo en los resultados"
      ],
      correctAnswer: 2,
      explanation: "El pensamiento sistémico es importante para entender las interrelaciones y efectos en cascada del proyecto en el sistema más grande."
    },
    {
      id: 21,
      question: "¿Qué es la gestión de la incertidumbre?",
      options: [
        "Ignorar los riesgos desconocidos",
        "Identificar, analizar y responder a eventos inciertos",
        "Aceptar todos los riesgos sin análisis",
        "Transferir toda la incertidumbre"
      ],
      correctAnswer: 1,
      explanation: "La gestión de la incertidumbre implica identificar, analizar y responder a eventos inciertos que pueden afectar el proyecto."
    },
    {
      id: 22,
      question: "¿Cuál es el rol del liderazgo en gestión de proyectos?",
      options: [
        "Solo dar órdenes",
        "Inspirar, motivar y guiar al equipo hacia los objetivos",
        "Controlar todos los aspectos",
        "Delegar sin supervisión"
      ],
      correctAnswer: 1,
      explanation: "El liderazgo efectivo inspira, motiva y guía al equipo hacia los objetivos del proyecto."
    },
    {
      id: 23,
      question: "¿Qué significa 'Adaptarse al contexto'?",
      options: [
        "Ignorar el entorno del proyecto",
        "Ajustar el enfoque según las circunstancias específicas",
        "Usar siempre el mismo método",
        "Seguir solo las mejores prácticas"
      ],
      correctAnswer: 1,
      explanation: "Adaptarse al contexto significa ajustar el enfoque del proyecto según las circunstancias específicas del entorno."
    },
    {
      id: 24,
      question: "¿Cuál es el propósito de la medición del rendimiento?",
      options: [
        "Culpar a los miembros del equipo",
        "Evaluar el progreso y tomar decisiones informadas",
        "Reducir la transparencia",
        "Ocultar problemas del proyecto"
      ],
      correctAnswer: 1,
      explanation: "La medición del rendimiento permite evaluar el progreso del proyecto y tomar decisiones informadas."
    },
    {
      id: 25,
      question: "¿Qué es la gestión del valor en proyectos?",
      options: [
        "Maximizar solo los beneficios financieros",
        "Maximizar el valor entregado mientras se optimizan los recursos",
        "Minimizar todos los costos",
        "Ignorar los beneficios no financieros"
      ],
      correctAnswer: 1,
      explanation: "La gestión del valor busca maximizar el valor entregado por el proyecto mientras se optimizan los recursos utilizados."
    }
  ]

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
          <span>Flashcards</span>
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
          <span>Quiz</span>
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
                <span>Completar 50 flashcards</span>
                <span className="text-sm text-gray-500">0/50</span>
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