const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-pulse">
          <div className="h-6 bg-gray-300 rounded-lg w-3/4 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
        </div>
      ))}
    </div>
);
export default LoadingSkeleton;