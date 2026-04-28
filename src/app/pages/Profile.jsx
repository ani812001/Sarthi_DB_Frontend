import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Briefcase } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const user = {
    name: localStorage.getItem("userName") || "tanayamisal2004",
    email: localStorage.getItem("userEmail") || "tanayamisal2004@gmail.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    role: "Data Manager",
    department: "Operations"
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Profile</h1>
          <p className="text-gray-500 text-sm">
            Manage your account and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="bg-white rounded-xl border shadow-sm p-6 text-center">

            <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center mb-4">
              <User className="text-white w-10 h-10" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-violet-600 text-sm">{user.role}</p>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {user.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {user.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {user.location}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {user.department}
              </div>
            </div>

            <button className="mt-5 w-full py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm">
              Edit Profile
            </button>

            <button
              onClick={logout}
              className="mt-3 w-full py-2 rounded-lg border text-red-600 text-sm"
            >
              Logout
            </button>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Reports Generated", value: "47" },
                { label: "Data Uploaded", value: "12.4 GB" },
                { label: "Searches Performed", value: "328" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border shadow-sm p-4 text-center">
                  <p className="text-xl font-semibold text-gray-800">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Preferences</h3>

              <div className="flex justify-between items-center py-3 border-b">
                <div>
                  <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                  <p className="text-xs text-gray-500">Receive updates via email</p>
                </div>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex justify-between items-center py-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Extra security</p>
                </div>
                <input type="checkbox" />
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li>Generated Company Report • 2 hours ago</li>
                <li>Uploaded file • 5 hours ago</li>
                <li>Searched institutes • 1 day ago</li>
                <li>Updated profile • 3 days ago</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}