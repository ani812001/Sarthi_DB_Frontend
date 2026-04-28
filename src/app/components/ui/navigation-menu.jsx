import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function NavigationMenu({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex items-center gap-6">

      {items.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setOpenIndex(index)}
          onMouseLeave={() => setOpenIndex(null)}
        >

          {/* Trigger */}
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
            {item.label}
            {item.children && <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Dropdown */}
          {item.children && openIndex === index && (
            <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-md z-50">
              {item.children.map((child, i) => (
                <div
                  key={i}
                  onClick={child.onClick}
                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {child.label}
                </div>
              ))}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}