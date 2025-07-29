# Sistema de Estudio PMI - PMBOK 7

Un sistema interactivo para estudiar el PMBOK 7 y prepararte para la certificación PMP.

## 🚀 Características

- **Carga de PDFs**: Sube tu guía del PMBOK 7 en PDF
- **Visor de PDF**: Navega por el contenido con zoom y navegación
- **Flashcards**: Aprende conceptos clave con tarjetas interactivas
- **Quiz**: Practica con preguntas del PMBOK 7
- **Seguimiento de Progreso**: Monitorea tu avance en el estudio
- **Búsqueda Inteligente**: Encuentra conceptos específicos rápidamente

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd pmi-study-system
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 📚 Cómo Usar

### 1. Cargar tu PDF del PMBOK 7

1. Ve a la página principal
2. Haz clic en "Seleccionar PDF"
3. Selecciona tu archivo PDF del PMBOK 7
4. El sistema procesará automáticamente el contenido

### 2. Usar las Herramientas de Estudio

#### Flashcards
- Navega entre las tarjetas con los botones "Anterior" y "Siguiente"
- Haz clic en "Mostrar Respuesta" para ver la explicación
- Las flashcards están organizadas por categorías

#### Quiz
- Responde las preguntas seleccionando una opción
- Ve la explicación después de cada respuesta
- Reinicia el quiz cuando termines

#### Progreso
- Monitorea tu avance en flashcards completadas
- Revisa tu puntuación en los quizzes
- Ve tus objetivos de estudio

## 🏗️ Estructura del Proyecto

```
pmi-study-system/
├── app/
│   ├── api/
│   │   └── upload/
│   │       └── route.ts          # API para carga de PDFs
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
├── components/
│   ├── PdfViewer.tsx             # Visor de PDF
│   └── StudyTools.tsx            # Herramientas de estudio
├── uploads/                      # Directorio para PDFs cargados
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Funcionalidades Principales

### Carga de PDFs
- Soporte para archivos PDF
- Validación de tipo de archivo
- Almacenamiento seguro en servidor

### Visor de PDF
- Navegación por páginas
- Control de zoom
- Interfaz intuitiva

### Herramientas de Estudio
- **Flashcards**: Conceptos clave del PMBOK 7
- **Quiz**: Preguntas de práctica
- **Progreso**: Seguimiento de avance

## 🔧 Tecnologías Utilizadas

- **Next.js 14**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos y diseño
- **Lucide React**: Iconos
- **pdf-parse**: Procesamiento de PDFs

## 📖 Contenido del PMBOK 7

El sistema incluye contenido basado en:

### 12 Principios
1. Ser un buen mayordomo
2. Crear un entorno colaborativo
3. Involucrar efectivamente a los interesados
4. Enfocarse en el valor
5. Pensar sistémicamente
6. Demostrar liderazgo
7. Adaptarse al contexto
8. Construir calidad
9. Navegar la complejidad
10. Optimizar el riesgo
11. Abrazar la adaptabilidad
12. Habilitar el cambio

### 8 Dominios de Rendimiento
1. Stakeholder Engagement
2. Team Performance
3. Development Approach and Life Cycle
4. Planning
5. Project Work
6. Delivery
7. Measurement
8. Uncertainty

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Otros Servicios
- Netlify
- Railway
- Heroku

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles específicos

## 🎓 Preparación para PMP

Este sistema te ayudará a:

- **Comprender los conceptos clave** del PMBOK 7
- **Practicar con preguntas** similares al examen
- **Seguir tu progreso** de estudio
- **Mantener consistencia** en tu preparación

¡Buena suerte en tu camino hacia la certificación PMP! 🎯 