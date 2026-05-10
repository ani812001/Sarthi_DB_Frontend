export default function CompanyDrawer({ open, onClose, companies }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl p-5 overflow-y-auto">

        <h2 className="text-2xl font-semibold mb-5">
          Total Companies
        </h2>

        <div className="space-y-3">
          {companies.map((company, i) => (
            <div
              key={i}
              className="border rounded-lg p-3"
            >
              <h3 className="font-semibold">
                {company.name}
              </h3>

              <p className="text-sm text-gray-500">
                {company.location}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}