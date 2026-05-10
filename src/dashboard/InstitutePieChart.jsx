import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Engineering", value: 45 },
  { name: "Medical", value: 25 },
  { name: "Commerce", value: 20 },
  { name: "Arts", value: 10 }
];

const COLORS = ["#06B6D4", "#67E8F9", "#A5F3FC", "#CFFAFE"];

export default function InstitutePieChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">
        Institute Distribution
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