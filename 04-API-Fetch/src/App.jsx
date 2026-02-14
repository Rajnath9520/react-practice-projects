
import UserApi from "./Api/userApi";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold inline-block bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 text-transparent bg-clip-text mb-4 drop-shadow-lg ">
            Data Fetch
          </h1>
          <p className="text-black/90 text-lg">Discover users and comments</p>
        </div>
          <UserApi/>
        </div>
      </div>
    </>
  );
}

export default App;
