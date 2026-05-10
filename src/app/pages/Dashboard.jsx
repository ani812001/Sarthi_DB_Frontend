import { useState } from "react";

import {
  Building,
  GraduationCap,
  Database,
  Activity,
  Calendar,
  X
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

/* KPI DATA */
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

/* COMPANY BAR DATA */
const companyBarData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 500 },
  { month: "Apr", value: 450 },
  { month: "May", value: 600 },
  { month: "Jun", value: 550 }
];

/* INSTITUTE BAR DATA */
const instituteBarData = [
  { month: "Jan", value: 250 },
  { month: "Feb", value: 350 },
  { month: "Mar", value: 420 },
  { month: "Apr", value: 500 },
  { month: "May", value: 700 },
  { month: "Jun", value: 650 }
];

/* COMPANY PIE DATA */
const companyPieData = [
  { name: "IT", value: 40 },
  { name: "AI", value: 30 },
  { name: "Marketing", value: 20 },
  { name: "Finance", value: 10 }
];

/* INSTITUTE PIE DATA */
const institutePieData = [
  { name: "Engineering", value: 45 },
  { name: "Medical", value: 25 },
  { name: "Commerce", value: 20 },
  { name: "Arts", value: 10 }
];

/* PIE COLORS */
const COLORS = [
  "#7C3AED",
  "#A78BFA",
  "#C4B5FD",
  "#DDD6FE"
];

/* COMPANY LIST */
const companies = [
  { name: "Google", location: "Mumbai" },
  { name: "Microsoft", location: "Pune" },
  { name: "Infosys", location: "Bangalore" },
  { name: "TCS", location: "Hyderabad" },
  { name: "Amazon", location: "Delhi" }
];

export default function Dashboard() {

  const [openCompanies, setOpenCompanies] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
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
                onClick={() => {
                  if (item.label === "Total Companies") {
                    setOpenCompanies(true);
                  }
                }}
                className="bg-white rounded-xl p-5 shadow-sm border cursor-pointer hover:shadow-md transition"
              >

                <div className="flex justify-between mb-4">

                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>

                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    {item.change}
                  </span>

                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  {item.value}
                </h2>

                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

        {/* Company + Institute Bar Charts */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Company Histogram */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">

            <h3 className="text-lg font-semibold mb-4">
              Company Monthly Growth
            </h3>

            <ResponsiveContainer width="100%" height={250}>

              <BarChart data={companyBarData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />
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

          {/* Institute Histogram */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">

            <h3 className="text-lg font-semibold mb-4">
              Institute Monthly Growth
            </h3>

            <ResponsiveContainer width="100%" height={250}>

              <BarChart data={instituteBarData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />
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
        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          {/* Company Pie Chart */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">

            <h3 className="text-lg font-semibold mb-4">
              Company Distribution
            </h3>

            <ResponsiveContainer width="100%" height={250}>

              <PieChart>

                <Pie
                  data={companyPieData}
                  dataKey="value"
                  outerRadius={90}
                >
                  {companyPieData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* Institute Pie Chart */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">

            <h3 className="text-lg font-semibold mb-4">
              Institute Distribution
            </h3>

            <ResponsiveContainer width="100%" height={250}>

              <PieChart>

                <Pie
                  data={institutePieData}
                  dataKey="value"
                  outerRadius={90}
                >
                  {institutePieData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* Companies Drawer */}
      {openCompanies && (

        <div className="fixed inset-0 z-50">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenCompanies(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl p-6 overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">

              <h2 className="text-2xl font-semibold">
                Total Companies
              </h2>

              <button onClick={() => setOpenCompanies(false)}>
                <X className="w-5 h-5" />
              </button>

            </div>

            {/* Company List */}
            <div className="space-y-3">

              {companies.map((company, i) => (

                <div
                  key={i}
                  className="border rounded-xl p-4 hover:bg-gray-50 transition"
                >

                  <h3 className="font-semibold text-gray-800">
                    {company.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {company.location}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}