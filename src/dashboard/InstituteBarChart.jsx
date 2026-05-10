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
  { month: "Jan", institutes: 200 },
  { month: "Feb", institutes: 350 },
  { month: "Mar", institutes: 450 },
  { month: "Apr", institutes: 500 },
  { month: "May", institutes: 650 },
  { month: "Jun", institutes: 750 }
];

export default function InstituteBarChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">
        Institute Monthly Growth
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="institutes"
            fill="#06B6D4"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}