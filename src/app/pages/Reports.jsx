import { useState } from "react";
import {
  Building,
  GraduationCap,
  CalendarDays
} from "lucide-react";

export default function Reports() {

  const [type, setType] = useState("companies");
  const [region, setRegion] = useState("all");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (

    <div className="min-h-screen bg-[#f8f9fc] dark:bg-[#020817] p-6">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Report Generator
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Generate custom reports for your data
          </p>

        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
            Report Configuration
          </h2>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-5">

            {/* Report Type */}
            <div>

              <label className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">
                Report Type
              </label>

              <div className="flex gap-2">

                <button
                  onClick={() => setType("companies")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition ${
                    type === "companies"
                      ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                      : "bg-gray-100 dark:bg-[#1e293b] text-gray-600 dark:text-gray-300"
                  }`}
                >

                  <Building className="w-4 h-4" />

                  Companies

                </button>

                <button
                  onClick={() => setType("institutes")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition ${
                    type === "institutes"
                      ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                      : "bg-gray-100 dark:bg-[#1e293b] text-gray-600 dark:text-gray-300"
                  }`}
                >

                  <GraduationCap className="w-4 h-4" />

                  Institutes

                </button>

              </div>

            </div>

            {/* Region */}
            <div>

              <label className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">
                Region
              </label>

              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-[#020817] text-gray-700 dark:text-white outline-none"
              >

                <option value="all">All Regions</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>

              </select>

            </div>

            {/* Calendar Date Range */}
            <div>

              <label className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">
                Select Date Range
              </label>

              <div className="space-y-3">

                {/* Start Date */}
                <div className="relative">

                  <CalendarDays className="w-4 h-4 absolute left-3 top-3 text-gray-400" />

                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 rounded-lg pl-10 pr-3 py-2 text-sm bg-white dark:bg-[#020817] text-gray-700 dark:text-white outline-none"
                  />

                </div>

                {/* End Date */}
                <div className="relative">

                  <CalendarDays className="w-4 h-4 absolute left-3 top-3 text-gray-400" />

                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 rounded-lg pl-10 pr-3 py-2 text-sm bg-white dark:bg-[#020817] text-gray-700 dark:text-white outline-none"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Summary Preview */}
          <div className="mt-6 bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900 rounded-lg p-4">

            <p className="text-sm text-gray-700 dark:text-gray-300">

              Generating{" "}

              <span className="font-semibold capitalize">
                {type}
              </span>{" "}

              report for{" "}

              <span className="font-semibold">
                {region === "all" ? "All Regions" : region}
              </span>{" "}

              from{" "}

              <span className="font-semibold">
                {startDate || "Start Date"}
              </span>{" "}

              to{" "}

              <span className="font-semibold">
                {endDate || "End Date"}
              </span>

            </p>

          </div>

          {/* Generate Button */}
          <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white font-medium hover:opacity-90 transition">

            Generate Report

          </button>

        </div>

      </div>

    </div>
  );
}