import {
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

export function ChartContainer({ children, className = "" }) {
  return (
    <div className={`bg-white border rounded-xl p-4 shadow-sm ${className}`}>
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}

export function ChartTooltip(props) {
  return <Tooltip {...props} />;
}

export function ChartLegend(props) {
  return <Legend {...props} />;
}