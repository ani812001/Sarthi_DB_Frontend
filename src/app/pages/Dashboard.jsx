import {
  Building,
  GraduationCap,
  Database,
  Activity,
  Calendar
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const kpiData = [
  {
    label: "Total Companies",
    value: "2,847",
    change: "+12.5%",
    icon: Building
  },
  {
    label: "Total Institutes",
    value: "1,923",
    change: "+8.3%",
    icon: GraduationCap
  },
  {
    label: "Data Uploaded",
    value: "50.2M",
    change: "+25.1%",
    icon: Database
  },
  {
    label: "API Fetch Count",
    value: "128.5K",
    change: "+18.7%",
    icon: Activity
  }
];

const companyBarData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 450 },
  { name: "May", value: 600 },
  { name: "Jun", value: 550 }
];

const instituteBarData = [
  { name: "Jan", value: 250 },
  { name: "Feb", value: 350 },
  { name: "Mar", value: 420 },
  { name: "Apr", value: 500 },
  { name: "May", value: 700 },
  { name: "Jun", value: 650 }
];

const companyPieData = [
  { name: "Maharashtra", value: 26 },
  { name: "Gujarat", value: 21 },
  { name: "Karnataka", value: 16 },
  { name: "Delhi", value: 13 },
  { name: "Others", value: 24 }
];

const institutePieData = [
  { name: "Maharashtra", value: 35 },
  { name: "Gujarat", value: 20 },
  { name: "Karnataka", value: 18 },
  { name: "Delhi", value: 12 },
  { name: "Others", value: 15 }
];

const COLORS = [
  "#7C3AED",
  "#A78BFA",
  "#C4B5FD",
  "#DDD6FE",
  "#EDE9FE"
];

export default function Dashboard() {

  return (

    <div className="min-h-screen bg-[#f8f9fc] dark:bg-[#020817] p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">

            <Calendar className="w-4 h-4" />

            Last updated: Today, April 22, 2026

          </p>

        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

          {kpiData.map((item, i) => {

            const Icon = item.icon;

            return (

              <div
                key={i}
                className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
              >

                <div className="flex justify-between mb-4">

                  <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900 flex items-center justify-center">

                    <Icon className="w-5 h-5 text-violet-600" />

                  </div>

                  <span className="text-xs text-green-600 bg-green-50 dark:bg-green-950/40 px-2 py-1 rounded">
                    {item.change}
                  </span>

                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {item.value}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>

              </div>

            );
          })}

        </div>

        {/* Bar Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          {/* Company Growth */}
          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Company Monthly Growth
            </h3>

            <ResponsiveContainer width="100%" height={250}>

              <BarChart data={companyBarData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#7C3AED"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* Institute Growth */}
          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Institute Monthly Growth
            </h3>

            <ResponsiveContainer width="100%" height={250}>

              <BarChart data={instituteBarData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#06B6D4"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Pie Charts */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Company Distribution */}
          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Company Distribution by State
            </h3>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              <ResponsiveContainer width="60%" height={250}>

                <PieChart>

                  <Pie
                    data={companyPieData}
                    dataKey="value"
                    outerRadius={90}
                  >

                    {companyPieData.map((_, i) => (

                      <Cell
                        key={i}
                        fill={COLORS[i % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

              {/* Legend */}
              <div className="space-y-3">

                {companyPieData.map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: COLORS[i % COLORS.length]
                      }}
                    />

                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item.name} ({item.value}%)
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Institute Distribution */}
          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Institute Distribution by State
            </h3>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              <ResponsiveContainer width="60%" height={250}>

                <PieChart>

                  <Pie
                    data={institutePieData}
                    dataKey="value"
                    outerRadius={90}
                  >

                    {institutePieData.map((_, i) => (

                      <Cell
                        key={i}
                        fill={COLORS[i % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

              {/* Legend */}
              <div className="space-y-3">

                {institutePieData.map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: COLORS[i % COLORS.length]
                      }}
                    />

                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item.name} ({item.value}%)
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}