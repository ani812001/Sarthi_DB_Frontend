import { useState } from "react";
import { Search } from "lucide-react";

const suggestions = [
  "Top companies in Mumbai",
  "Best institutes in Gujarat",
  "Engineering colleges in Bangalore",
  "IT companies with 100+ employees",
  "Medical institutes in Maharashtra"
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col items-center justify-center px-4">

      {/* Badge */}
      <div className="mb-4 px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-sm font-medium">
        AI-Powered Search
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 text-center">
        Find Anything, Instantly
      </h1>

      <p className="text-gray-500 mt-3 text-center max-w-xl">
        Search through companies and institutes with natural language
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mt-6">
        <div className="flex items-center bg-white border rounded-xl px-4 py-3 shadow-sm">
          <Search className="w-5 h-5 text-gray-400 mr-3" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search like: Top companies in Mumbai or best institutes in Gujarat"
            className="flex-1 outline-none text-gray-700 text-sm"
          />

          <button className="ml-3 px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm">
            Search
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl">
        {suggestions.map((item, i) => (
          <button
            key={i}
            onClick={() => setQuery(item)}
            className="px-4 py-2 rounded-full bg-white border text-sm text-gray-600 hover:bg-gray-50"
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}