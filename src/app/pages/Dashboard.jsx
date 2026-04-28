import {
  Building,
  GraduationCap,
  Database,
  Activity,
  Calendar
} from "lucide-react";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const kpiData = [
  { label: "Total Companies", value: "2,847", change: "+12.5%", icon: Building },
  { label: "Total Institutes", value: "1,923", change: "+8.3%", icon: GraduationCap },
  { label: "Data Uploaded", value: "50.2M", change: "+25.1%", icon: Database },
  { label: "API Fetch Count", value: "128.5K", change: "+18.7%", icon: Activity }
];

const barData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 450 },
  { name: "May", value: 600 },
  { name: "Jun", value: 550 }
];

const pieData = [
  { name: "Maharashtra", value: 26 },
  { name: "Gujarat", value: 21 },
  { name: "Karnataka", value: 16 },
  { name: "Delhi", value: 13 },
  { name: "Others", value: 24 }
];

const COLORS = ["#7C3AED", "#A78BFA", "#C4B5FD", "#DDD6FE", "#EDE9FE"];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
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
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border">
                <div className="flex justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    {item.change}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Bar */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Monthly Growth Trends</h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#7C3AED" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie */}
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Distribution by State</h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={90}>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
}