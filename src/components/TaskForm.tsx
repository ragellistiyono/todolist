import { useState } from 'react'
import { Plus } from 'lucide-react'

interface TaskFormProps {
  onSubmit: (task: string) => void
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [task, setTask] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (task.trim()) {
      onSubmit(task)
      setTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus size={20} />
      </button>
    </form>
  )
}
