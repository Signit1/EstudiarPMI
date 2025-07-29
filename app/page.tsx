'use client'

import { useState } from 'react'
import { Plus, FolderOpen, Users, Calendar, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react'

interface Project {
  id: number
  name: string
  description: string
  status: 'active' | 'pending' | 'completed' | 'cancelled'
  progress: number
  startDate: string
  endDate: string
  team: string[]
  budget: number
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Desarrollo de Aplicación Web",
      description: "Creación de una aplicación web moderna para gestión de clientes",
      status: 'active',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      team: ['Ana García', 'Carlos López', 'María Rodríguez'],
      budget: 50000
    },
    {
      id: 2,
      name: "Migración de Base de Datos",
      description: "Migración de sistema legacy a nueva arquitectura",
      status: 'pending',
      progress: 25,
      startDate: '2024-03-01',
      endDate: '2024-08-15',
      team: ['Juan Pérez', 'Sofia Martín'],
      budget: 35000
    },
    {
      id: 3,
      name: "Implementación de CRM",
      description: "Despliegue de sistema CRM para ventas",
      status: 'completed',
      progress: 100,
      startDate: '2023-10-01',
      endDate: '2024-02-28',
      team: ['Luis Fernández', 'Carmen Ruiz', 'Diego Moreno'],
      budget: 75000
    }
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'cancelled':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'status-active'
      case 'pending':
        return 'status-pending'
      case 'completed':
        return 'status-completed'
      case 'cancelled':
        return 'status-cancelled'
      default:
        return 'status-pending'
    }
  }

  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length,
    pending: projects.filter(p => p.status === 'pending').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    avgProgress: projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-600">Sistema de Gestión de Proyectos</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-primary-600 font-medium">Dashboard</a>
              <a href="#" className="text-gray-500 hover:text-primary-600">Proyectos</a>
              <a href="#" className="text-gray-500 hover:text-primary-600">Equipos</a>
              <a href="#" className="text-gray-500 hover:text-primary-600">Reportes</a>
            </nav>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Nuevo Proyecto</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FolderOpen className="w-8 h-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Proyectos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-success-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Activos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-warning-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Progreso Promedio</p>
                <p className="text-2xl font-bold text-gray-900">{Math.round(stats.avgProgress)}%</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Presupuesto Total</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalBudget.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Proyectos Recientes</h2>
            <button className="btn-secondary">Ver Todos</button>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-gray-600 mt-1">{project.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`status-badge ${getStatusClass(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span className="ml-1 capitalize">{project.status}</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Progreso</p>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{project.progress}%</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Equipo</p>
                    <div className="flex items-center mt-1">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm">{project.team.length} miembros</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Fechas</p>
                    <p className="text-sm mt-1">{project.startDate} - {project.endDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Presupuesto</p>
                    <p className="text-sm font-medium mt-1">${project.budget.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <button className="btn-secondary">Ver Detalles</button>
                  <button className="btn-primary">Editar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 