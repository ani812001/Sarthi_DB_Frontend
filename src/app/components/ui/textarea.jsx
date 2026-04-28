export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full min-h-24 p-3 border border-gray-300 rounded-md text-sm 
      placeholder-gray-400 focus:outline-none focus:border-violet-500 
      disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}