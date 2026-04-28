export function Badge({ children, variant = "default", className = "" }) {
  const base =
    "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md";

  const styles = {
    default: "bg-violet-600 text-white",
    secondary: "bg-gray-100 text-gray-700",
    destructive: "bg-red-500 text-white",
    outline: "border border-gray-300 text-gray-700"
  };

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}