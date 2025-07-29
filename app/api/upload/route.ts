import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No se proporcionó ningún archivo' },
        { status: 400 }
      )
    }

    // Verificar que sea un PDF
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Solo se permiten archivos PDF' },
        { status: 400 }
      )
    }

    // Crear directorio para PDFs si no existe
    const uploadDir = join(process.cwd(), 'uploads')
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // Guardar el archivo
    const fileName = `pmbok7_${Date.now()}.pdf`
    const filePath = join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    return NextResponse.json({
      message: 'PDF cargado exitosamente',
      fileName: fileName,
      fileSize: file.size
    })

  } catch (error) {
    console.error('Error al cargar PDF:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
} 