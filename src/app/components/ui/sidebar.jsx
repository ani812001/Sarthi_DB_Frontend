import { useState } from "react";
import { Menu } from "lucide-react";

export function Sidebar({ items = [] }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen transition-all duration-300 ${
          open ? "w-64" : "w-16"
        }`}
      >
        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="p-3"
        >
          <Menu />
        </button>

        {/* Menu */}
        <div className="mt-4 flex flex-col gap-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={item.onClick}
            >
              {item.icon}
              {open && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}