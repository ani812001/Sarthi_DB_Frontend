import { useState } from "react";

export function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded">
          {text}
        </div>
      )}
    </div>
  );
}