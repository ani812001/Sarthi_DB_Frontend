import { Database } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f9fc]">
      
      <div className="text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
            <Database className="w-7 h-7 text-white animate-spin" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Sarthi
        </h1>

        {/* Loading text */}
        <p className="text-sm text-gray-500">
          Loading...
        </p>

      </div>
    </div>
  );
}