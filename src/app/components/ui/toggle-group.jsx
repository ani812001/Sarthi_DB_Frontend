export function ToggleGroup({ options = [], value, onChange }) {
  return (
    <div className="flex border rounded-md overflow-hidden w-fit">

      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 text-sm ${
            value === opt.value
              ? "bg-violet-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {opt.label}
        </button>
      ))}

    </div>
  );
}