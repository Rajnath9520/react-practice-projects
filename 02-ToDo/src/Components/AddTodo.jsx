import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    handleAdd(task);
    setTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="flex gap-3">
      <div className="flex-1 relative">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
        />
        {task && (
          <button
            onClick={() => setTask("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <button
        onClick={addTodo}
        disabled={!task.trim()}
        className="px-4 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
      >
        <span className="hidden sm:inline">Add Task</span>
        <span className="sm:hidden">+</span>
      </button>
    </div>
  );
}