import { useState } from "react";
import { Check } from "lucide-react";

export function Checkbox({ checked, onChange, className = "" }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  const toggle = () => {
    const value = !isChecked;
    setIsChecked(value);
    onChange && onChange(value);
  };

  return (
    <button
      onClick={toggle}
      className={`w-4 h-4 rounded border flex items-center justify-center ${
        isChecked ? "bg-violet-600 border-violet-600" : "bg-white border-gray-300"
      } ${className}`}
    >
      {isChecked && <Check className="w-3 h-3 text-white" />}
    </button>
  );
}