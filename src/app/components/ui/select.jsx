export function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select option",
  className = "",
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full h-10 px-3 border border-gray-300 rounded-md text-sm 
      focus:outline-none focus:border-violet-500 ${className}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}