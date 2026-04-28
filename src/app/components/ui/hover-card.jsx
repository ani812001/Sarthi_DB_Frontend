import { useState, useRef } from "react";

export function HoverCard({ trigger, children, className = "" }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    timeoutRef.current = setTimeout(() => setOpen(true), 100);
  };

  const handleLeave = () => {
    clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      {trigger}

      {/* Content */}
      {open && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-sm p-4 z-50 ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}