import { useState, useEffect } from "react"
import './App.css'
import AddTodo from "./Components/AddTodo";
import ShowTodo from "./Components/ShowTodo";

function App() {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });
  
  const total = todos.length;
  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = total - completedCount;

  const handleAdd = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);                
  };

  const handleToggle = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const handleEdit = (id, newText) => {
    if (newText.trim() === "") return;
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            ToDo 
          </h1>
          <p className="text-gray-500 text-sm">Organize your day, accomplish your goals</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 overflow-hidden">
          
          <div className="bg-blue-500 px-6 py-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{total} Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>{completedCount} Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>{pendingCount} Pending</span>
                </div>
              </div>
              
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="text-xs px-3 py-1.5 bg-red-500 hover:bg-red-400 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  Clear Completed
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="border-b border-gray-100">
            <div className="flex px-6">
              {["all", "pending", "completed"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-3 capitalize text-sm font-medium transition-all relative
                  ${filter === type
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {type}
                  {filter === type && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 border-b border-gray-100">
            <AddTodo handleAdd={handleAdd} />
          </div>

          {/* List */}
          <div className="p-6 max-h-[500px] overflow-y-auto">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">
                  {filter === "completed" && "No completed tasks yet"}
                  {filter === "pending" && "No pending tasks"}
                  {filter === "all" && "No tasks yet. Add one to get started!"}
                </p>
              </div>
            ) : (
              <ShowTodo
                todos={filteredTodos}
                handleToggle={handleToggle}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-gray-400">
          Press Enter to quickly add tasks
        </div>
      </div>
    </div>
  );
}

export default App