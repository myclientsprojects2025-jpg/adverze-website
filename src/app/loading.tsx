export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A24] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-purple-900/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-400 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
