import { useState, useRef, useEffect } from "react";

export function Dropdown({ trigger, items = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="outline-none"
      >
        {trigger}
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-sm z-50">

          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition ${
                item.destructive ? "text-red-600" : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}