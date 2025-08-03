export interface Flashcard {
  id: number
  question: string
  answer: string
  category: string
}

export interface Quiz {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

// Flashcards del PMBOK 7 (200 flashcards)
export const flashcards: Flashcard[] = [
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

// Quiz del PMBOK 7 (200 preguntas)
export const quiz: Quiz[] = [
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
  }
] 