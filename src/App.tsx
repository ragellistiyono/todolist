import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import { generateTaskResponse } from './api/gemini'

interface Task {
  text: string;
  response: string | null;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [loading, setLoading] = useState(false)

  const addTask = (taskText: string) => {
    const newTasks = [...tasks, { text: taskText, response: null, completed: false }]
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const toggleCompletion = (index: number) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const generateResponse = async (task: Task, index: number) => {
    setLoading(true)
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      const response = await generateTaskResponse(task.text, apiKey)
      const updatedTasks = [...tasks]
      updatedTasks[index].response = response
      setTasks(updatedTasks)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate response. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        <TaskForm onSubmit={addTask} />
        
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task.text}
              response={task.response}
              onDelete={() => deleteTask(index)}
              onGenerateResponse={() => generateResponse(task, index)}
              loading={loading}
              onToggleCompletion={() => toggleCompletion(index)}
              completed={task.completed}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
