import { useState } from "react";
import { Building, GraduationCap, Search } from "lucide-react";

const companies = [
  { name: "Tech Innovations Pvt Ltd", location: "Mumbai", employees: 850, industry: "IT Services", revenue: "$12M" },
  { name: "Data Systems Corp", location: "Pune", employees: 320, industry: "Software", revenue: "$6M" },
  { name: "Cloud Solutions India", location: "Bangalore", employees: 1200, industry: "Cloud Computing", revenue: "$18M" },
  { name: "AI Ventures Ltd", location: "Hyderabad", employees: 450, industry: "AI/ML", revenue: "$9M" },
  { name: "Digital Marketing Pro", location: "Delhi", employees: 180, industry: "Marketing", revenue: "$4M" }
];

export default function Data() {
  const [activeTab, setActiveTab] = useState("companies");
  const [search, setSearch] = useState("");

  const filtered = companies.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-[#020817] p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Data Management</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Browse and manage your companies and institutes
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setActiveTab("companies")}
            className={`px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              activeTab === "companies"
                ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                : "bg-white border text-gray-600"
            }`}
          >
            <Building className="w-4 h-4" />
            Companies
          </button>

          <button
            onClick={() => setActiveTab("institutes")}
            className={`px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              activeTab === "institutes"
                ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                : "bg-white border text-gray-600"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Institutes
          </button>
        </div>

        {/* Search */}
        <div className="mb-5 max-w-md">
          <div className="flex items-center bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search companies..."
              className="w-full outline-none text-sm bg-transparent text-gray-800 dark:text-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
              <tr>
                <th className="text-left px-5 py-3">Name</th>
                <th className="text-left px-5 py-3">Location</th>
                <th className="text-left px-5 py-3">Employees</th>
                <th className="text-left px-5 py-3">Industry</th>
                <th className="text-left px-5 py-3">Revenue</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, i) => (
                <tr key={i} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td className="px-5 py-3 font-medium text-gray-800 dark:text-white">{item.name}</td>
                  <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{item.location}</td>
                  <td className="px-5 py-3 text-gray-600">{item.employees}</td>
                  <td className="px-5 py-3">
                    <span className="px-2 py-1 bg-violet-100 text-violet-600 rounded-full text-xs">
                      {item.industry}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-medium">{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>Showing {filtered.length} results</span>

          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded">1</button>
            <button className="px-3 py-1 border rounded bg-violet-600 text-white">2</button>
          </div>
        </div>

      </div>
    </div>
  );
}