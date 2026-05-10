import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "IT", value: 40 },
  { name: "AI", value: 30 },
  { name: "Marketing", value: 20 },
  { name: "Finance", value: 10 }
];

const COLORS = ["#7C3AED", "#A78BFA", "#C4B5FD", "#DDD6FE"];

export default function CompanyPieChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">
        Company Distribution
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}