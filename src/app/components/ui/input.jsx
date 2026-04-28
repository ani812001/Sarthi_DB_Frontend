export function Input({
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      className={`w-full h-10 px-3 border border-gray-300 rounded-md text-sm 
      focus:outline-none focus:border-violet-500 
      disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  );
}