import './globals.css'

export const metadata = {
  title: 'Sistema de Estudio PMI - PMBOK 7',
  description: 'Sistema interactivo para estudiar PMI PMBOK 7',
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