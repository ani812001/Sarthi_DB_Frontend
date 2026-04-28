import { useState } from "react";
import { Search } from "lucide-react";

export function CommandDialog({ open, onClose, items = [] }) {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50">

      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-4">

        {/* Input */}
        <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full outline-none text-sm"
          />
        </div>

        {/* List */}
        <div className="max-h-60 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              No results found
            </p>
          ) : (
            filtered.map((item, i) => (
              <div
                key={i}
                className="px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
                onClick={onClose}
              >
                {item}
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}