import './globals.css'

export const metadata = {
  title: 'Sistema de Gestión de Proyectos - PMI',
  description: 'Sistema completo de gestión de proyectos basado en PMI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
} 