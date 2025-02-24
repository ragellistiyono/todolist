import { Loader2 } from 'lucide-react'

interface TaskItemProps {
  task: string
  response: string | null
  onDelete: () => void
  onGenerateResponse: () => void
  onToggleCompletion: () => void
  loading: boolean
  completed: boolean
}

interface ParsedResponse {
  mainTask: string;
  subtasks: string[];
}

function parseResponse(response: string): ParsedResponse {
  const lines = response.split('\n').filter(line => line.trim());
  const mainTask = lines[0];
  const subtasks = lines.slice(1).map(line => line.trim().replace(/^[-*]\s*/, ''));
  return { mainTask, subtasks };
}

export default function TaskItem({ 
  task, 
  response, 
  onDelete, 
  onGenerateResponse, 
  loading,
  onToggleCompletion,
  completed 
}: TaskItemProps) {
  const parsedResponse = response ? parseResponse(response) : null;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggleCompletion}
            className="h-5 w-5 rounded border-gray-300"
          />
          <span className={`text-gray-700 ${completed ? 'line-through' : ''}`}>
            {task}
          </span>
        </div>
        
        <div className="flex gap-2">
          {!response && (
            <button
              onClick={onGenerateResponse}
              disabled={loading}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-300"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Generate Response'}
            </button>
          )}
          <button
            onClick={onDelete}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      {parsedResponse && (
        <div className="mt-4 pl-7">
          <div className="text-gray-600 font-medium mb-2">{parsedResponse.mainTask}</div>
          <ul className="space-y-2">
            {parsedResponse.subtasks.map((subtask, index) => (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  onChange={() => {}} // Add subtask completion handling if needed
                />
                <span className="text-gray-600">{subtask}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
