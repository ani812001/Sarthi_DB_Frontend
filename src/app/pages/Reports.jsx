import { useState } from "react";
import { Building, GraduationCap } from "lucide-react";

export default function Reports() {
  const [type, setType] = useState("companies");
  const [region, setRegion] = useState("all");
  const [time, setTime] = useState("6months");

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-[#020817] p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Report Generator</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Generate custom reports for your data
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
            Report Configuration
          </h2>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-5">

            {/* Report Type */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Report Type
              </label>

              <div className="flex gap-2">
                <button
                  onClick={() => setType("companies")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                    type === "companies"
                      ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Building className="w-4 h-4" />
                  Companies
                </button>

                <button
                  onClick={() => setType("institutes")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                    type === "institutes"
                      ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  Institutes
                </button>
              </div>
            </div>

            {/* Region */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Region
              </label>

              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-[#0f172a]"
              >
                <option value="all">All Regions</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            {/* Time Range */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Time Range
              </label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-[#0f172a]"
              >
                <option value="1month">Last Month</option>
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
              </select>
            </div>

          </div>

          {/* Button */}
          <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white font-medium">
            Generate Report
          </button>

        </div>
      </div>
    </div>
  );
}