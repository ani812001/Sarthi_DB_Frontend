import { useState } from "react";

export function ContextMenu({ children, menuItems = [] }) {
  const [pos, setPos] = useState(null);

  const handleRightClick = (e) => {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
  };

  const closeMenu = () => setPos(null);

  return (
    <div onContextMenu={handleRightClick} onClick={closeMenu} className="relative">
      {children}

      {pos && (
        <div
          className="fixed bg-white border rounded-lg shadow-md w-40 z-50"
          style={{ top: pos.y, left: pos.x }}
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                item.onClick();
                closeMenu();
              }}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}