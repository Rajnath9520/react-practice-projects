import { useEffect, useState } from "react";
import LoadingSkeleton from "../Components/LoadingSkeleton";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt,FaLink } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function ImprovedUserAPI() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("users");
  const [manualUsers, setManualUsers] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [usersRes, commentsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users/"),
          fetch("https://jsonplaceholder.typicode.com/comments")
        ]);
        
        const usersData = await usersRes.json();
        const commentsData = await commentsRes.json();
        
        setUsers(usersData);
        setComments(commentsData.slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleManualFetch = async () => {
    setHasFetched(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/");
      const data = await response.json();
      setManualUsers(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
        <>
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "users"
                ? "bg-white text-purple-600 shadow-xl scale-105"
                : "bg-white/30 text-gray-400 hover:bg-white/50"
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("comments")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "comments"
                ? "bg-white text-blue-600 shadow-xl scale-105"
                : "bg-white/30 text-gray-400 hover:bg-white/50"
            }`}
          >
            Comments
          </button>
          <button
            onClick={() => setActiveTab("manual")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "manual"
                ? "bg-white text-green-600 shadow-xl scale-105"
                : "bg-white/30 text-gray-400 hover:bg-white/50"
            }`}
          >
            Manual Fetch
          </button>
        </div>

        

        {/* Error State */}
        {error && (
          <div className="bg-red-500 text-white px-6 py-4 rounded-2xl shadow-lg mb-8 flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-semibold">Oops! Something went wrong...</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && <LoadingSkeleton />}

        {/* Users Tab */}
        {!isLoading && !error && activeTab === "users" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {users.map((user, index) => (
              <div
                key={user.id}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {user.name.charAt(0)}
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    ID: {user.id}
                  </span>
                </div>
                <h2 className="font-bold text-xl text-gray-800 mb-2">{user.name}</h2>
                <p className="text-purple-600 italic mb-2 flex items-center gap-2">
                  <span><IoIosMail /></span> {user.email}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <span><FaUserAlt /></span> {user.company.name}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <span><FaLocationDot /></span> {user.address.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Comments Tab */}
        {!isLoading && !error && activeTab === "comments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {comments.map((comment, index) => (
              <div
                key={comment.id}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <IoChatbubbleEllipsesOutline />
                  </div>
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Comment #{comment.id}
                  </span>
                </div>
                <h2 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                  {comment.name.toUpperCase()}
                </h2>
                <p className="text-blue-600 text-sm mb-3 flex items-center gap-2">
                  <span><IoIosMail /></span> {comment.email}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Manual Fetch Tab */}
        {activeTab === "manual" && (
          <div className="text-center">
            <button
              onClick={handleManualFetch}
              className="group relative px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 mb-8"
            >
              <span className="relative z-10 flex items-center gap-3">
                Fetch Users Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {hasFetched && manualUsers.length === 0 && (
              <p className="text-white text-lg">Loading...</p>
            )}

            {manualUsers.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {manualUsers.map((user, index) => (
                  <div
                    key={user.id}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {user.name.charAt(0)}
                      </div>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                        ✓ Fetched
                      </span>
                    </div>
                    <h2 className="font-bold text-xl text-gray-800 mb-2">{user.name}</h2>
                    <p className="text-green-600 italic mb-2 flex items-center gap-2">
                      <span><IoIosMail /></span> {user.email}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span><FaUserAlt /></span> {user.company.name}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-700 flex items-center gap-2">
                        <span><FaLink/></span> {user.website}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
    
    </>
  );
}