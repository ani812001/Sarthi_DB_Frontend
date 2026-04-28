import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  Upload,
  Search,
  Database,
  FileText,
  User,
  LogOut,
  ChevronDown
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Upload", path: "/upload", icon: Upload },
  { name: "Search", path: "/search", icon: Search },
  { name: "Data", path: "/data", icon: Database },
  { name: "Reports", path: "/reports", icon: FileText }
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const name = localStorage.getItem("userName") || "User";
  const email = localStorage.getItem("userEmail") || "user@sarthi.com";

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo2.png" alt="Logo" className="w-15 h-15" />
          
          <span className="font-semibold text-2xl text-gray-800">Saarthi</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <div className={`flex items-center gap-1 text-sm ${
                  active ? "text-violet-600" : "text-gray-600 hover:text-violet-600"
                }`}>
                  <Icon className="w-4 h-4" />
                  {item.name}
                </div>

                {active && (
                  <div className="h-[2px] bg-violet-600 mt-1 rounded" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Profile */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-lg bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
              {initials}
            </div>

            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-800">{name}</p>
              <p className="text-xs text-gray-500">{email}</p>
            </div>

            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-md">

              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
              >
                <User className="w-4 h-4" />
                Profile
              </Link>

              <button
                onClick={logout}
                className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </nav>
  );
}