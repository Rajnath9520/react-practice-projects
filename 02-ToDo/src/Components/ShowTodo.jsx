import { useState } from "react";

export default function ShowTodo({ todos, handleToggle, handleEdit, handleDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="space-y-2">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className={`group flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200
          ${todo.completed 
            ? "bg-gray-50" 
            : "bg-white hover:bg-gray-50 border border-gray-100 hover:border-indigo-200"
          }`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {/* Checkbox */}
          <button
            onClick={() => handleToggle(todo.id)}
            className="mt-0.5 flex-shrink-0"
          >
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
              ${todo.completed
                ? "bg-indigo-500 border-indigo-500"
                : "border-gray-300 hover:border-indigo-400"
              }`}
            >
              {todo.completed && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>

          <div className="flex-1 min-w-0">
            {editingId === todo.id ? (
              <input
                className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleEdit(todo.id, editText);
                    setEditingId(null);
                  }
                  if (e.key === 'Escape') {
                    setEditingId(null);
                  }
                }}
                autoFocus
              />
            ) : (
              <p className={`text-sm leading-relaxed break-words
                ${todo.completed 
                  ? "line-through text-gray-400" 
                  : "text-gray-700"
                }`}
              >
                {todo.text}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {editingId === todo.id ? (
              <>
                <button
                  onClick={() => {
                    handleEdit(todo.id, editText);
                    setEditingId(null);
                  }}
                  className="p-1.5 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                  title="Save"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="p-1.5 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                  title="Cancel"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </>
            ) : (
              <>
                {!todo.completed && (
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text);
                    }}
                    className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-indigo-600 transition-all"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all"
                  title="Delete"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}