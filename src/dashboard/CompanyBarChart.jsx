import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", companies: 400 },
  { month: "Feb", companies: 300 },
  { month: "Mar", companies: 500 },
  { month: "Apr", companies: 700 },
  { month: "May", companies: 600 },
  { month: "Jun", companies: 800 }
];

export default function CompanyBarChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">
        Company Monthly Growth
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="companies"
            fill="#7C3AED"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}