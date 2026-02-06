import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const isMinus = count<=0;

  const CounterMinus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-90 text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Counter App</h1>

        {/* Counter*/}
        <div
          key={count}
          className="text-5xl font-extrabold text-gray-900 mb-6
                    transition-all duration-150 ease-out
                    scale-125 opacity-80">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-18">
          <button
            onClick={CounterMinus}
            className={`${isMinus ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-400 "} text-white px-5 py-2 rounded-xl text-xl transition`}
          >
            −
          </button>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-xl text-xl transition"
          >
            +
          </button>
        </div>

        {/* Reset Button*/}
        <div className="mt-6">
          <button
            onClick={() => setCount(0)}
            className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-2 rounded-xl transition"
          >
            Reset
          </button>
        </div>
        {/* Step Button*/}
        <div className="mt-6 flex justify-center gap-6 ">
          <button
            onClick={() => setCount((prev) => prev + 5)}
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-xl transition"
          >
            +5
          </button>
          <button
            onClick={() => setCount((prev) => prev + 10)}
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-xl transition"
          >
            +10
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
