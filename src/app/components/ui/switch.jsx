export function Switch({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <div className="w-10 h-5 bg-gray-300 rounded-full transition-colors peer-checked:bg-violet-600"></div>

      <div
        className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />

    </label>
  );
}