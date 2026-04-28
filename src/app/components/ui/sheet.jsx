import { X } from "lucide-react";

export function Sheet({ open, onClose, side = "right", children }) {
  if (!open) return null;

  const position = {
    right: "right-0 top-0 h-full w-80",
    left: "left-0 top-0 h-full w-80",
    top: "top-0 left-0 w-full h-64",
    bottom: "bottom-0 left-0 w-full h-64",
  };

  return (
    <div className="fixed inset-0 z-50">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute bg-white shadow-lg p-5 ${position[side]}`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-4 h-4" />
        </button>

        {children}
      </div>

    </div>
  );
}