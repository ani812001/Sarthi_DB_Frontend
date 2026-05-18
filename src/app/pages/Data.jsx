import { useState, useEffect } from "react";

import axios from "axios";

import {
  Building,
  GraduationCap,
  Search
} from "lucide-react";

export default function Data() {

  const [activeTab, setActiveTab] = useState("companies");

  const [search, setSearch] = useState("");

  const [companies, setCompanies] = useState([]);

  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {

    fetchCompanies();

    fetchInstitutes();

  }, []);

  const fetchCompanies = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/company"
      );

      setCompanies(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchInstitutes = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/institute"
      );

      setInstitutes(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const data =
    activeTab === "companies"
      ? companies
      : institutes;

  const filtered = data.filter((item) =>
    item.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-[#f8f9fc] dark:bg-[#020817] p-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Data Management
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Browse and manage your companies and institutes
          </p>

        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-5">

          <button
            onClick={() => setActiveTab("companies")}
            className={`px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition ${
              activeTab === "companies"
                ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                : "bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >

            <Building className="w-4 h-4" />

            Companies

          </button>

          <button
            onClick={() => setActiveTab("institutes")}
            className={`px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition ${
              activeTab === "institutes"
                ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                : "bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
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
              placeholder={`Search ${activeTab}...`}
              className="w-full outline-none text-sm bg-transparent text-gray-800 dark:text-white"
            />

          </div>

        </div>

        {/* Table */}
        <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">

              <tr>

                <th className="text-left px-5 py-3">
                  Name
                </th>

                <th className="text-left px-5 py-3">
                  Location
                </th>

                <th className="text-left px-5 py-3">
                  Employees
                </th>

                <th className="text-left px-5 py-3">
                  Industry
                </th>

                <th className="text-left px-5 py-3">
                  Revenue
                </th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((item, i) => (

                <tr
                  key={i}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >

                  <td className="px-5 py-3 font-medium text-gray-800 dark:text-white">

                    {item.name}

                  </td>

                  <td className="px-5 py-3 text-gray-600 dark:text-gray-300">

                    {item.location}

                  </td>

                  <td className="px-5 py-3 text-gray-600 dark:text-gray-300">

                    {item.employees}

                  </td>

                  <td className="px-5 py-3">

                    <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 rounded-full text-xs">

                      {item.industry}

                    </span>

                  </td>

                  <td className="px-5 py-3 font-medium text-gray-700 dark:text-gray-200">

                    {item.revenue}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">

          <span>
            Showing {filtered.length} results
          </span>

          <div className="flex gap-2">

            <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded">
              1
            </button>

            <button className="px-3 py-1 rounded bg-violet-600 text-white">
              2
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}