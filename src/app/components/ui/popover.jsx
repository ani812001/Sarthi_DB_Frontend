import { useState, useRef, useEffect } from "react";

export function Popover({ trigger, children }) {
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
      <button onClick={() => setOpen(!open)}>
        {trigger}
      </button>

      {/* Content */}
      {open && (
        <div className="absolute mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-md p-4 z-50">
          {children}
        </div>
      )}

    </div>
  );
}