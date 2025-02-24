import { ClipboardList } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-3">
        <ClipboardList className="text-blue-600" size={32} />
        <h1 className="text-2xl font-bold text-gray-800">Aspri ~ Asisten Pribadi</h1>
        <ClipboardList className="text-blue-600" size={32} />
      </div>
    </header>
  )
}
