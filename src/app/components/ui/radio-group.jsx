export function RadioGroup({ options = [], value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, i) => (
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          
          <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="accent-violet-600"
          />

          <span className="text-sm text-gray-700">
            {option.label}
          </span>

        </label>
      ))}
    </div>
  );
}