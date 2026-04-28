export function AspectRatio({ ratio = "16/9", children, className = "" }) {
  return (
    <div
      className={`w-full ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {children}
    </div>
  );
}