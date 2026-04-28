export function Toggle({ pressed, onChange, children }) {
  return (
    <button
      onClick={() => onChange(!pressed)}
      className={`px-3 py-2 text-sm rounded-md transition ${
        pressed
          ? "bg-violet-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}