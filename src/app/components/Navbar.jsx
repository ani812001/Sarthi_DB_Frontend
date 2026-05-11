import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  useState,
  useRef,
  useEffect
} from "react";

import {
  LayoutDashboard,
  Upload,
  Search,
  Database,
  FileText,
  User,
  LogOut,
  ChevronDown,
  Moon,
  Sun
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

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const ref = useRef(null);

  const name =
    localStorage.getItem("userName") || "User";

  const email =
    localStorage.getItem("userEmail") ||
    "user@sarthi.com";

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

  /* Close dropdown */
  useEffect(() => {

    const handler = (e) => {

      if (
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );

  }, []);

  /* Dark mode */
  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );

    }

  }, [darkMode]);

  return (

    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 z-50">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <img
            src="/logo2.png"
            alt="Logo"
            className="w-15 h-15"
          />

          <span className="font-semibold text-2xl text-gray-800 dark:text-white">
            Saarthi
          </span>

        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-6">

          {navItems.map((item) => {

            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (

              <Link
                key={item.path}
                to={item.path}
              >

                <div
                  className={`flex items-center gap-1 text-sm ${
                    active
                      ? "text-violet-600"
                      : "text-gray-600 dark:text-gray-300 hover:text-violet-600"
                  }`}
                >

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

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white"
          >

            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}

          </button>

          {/* Profile */}
          <div
            className="relative"
            ref={ref}
          >

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2"
            >

              <div className="w-9 h-9 rounded-lg bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">
                {initials}
              </div>

              <div className="hidden md:block text-left">

                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {name}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {email}
                </p>

              </div>

              <ChevronDown className="w-4 h-4 text-gray-500" />

            </button>

            {/* Dropdown */}
            {open && (

              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">

                <Link
                  to="/profile"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white"
                >

                  <User className="w-4 h-4" />

                  Profile

                </Link>

                <button
                  onClick={logout}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                >

                  <LogOut className="w-4 h-4" />

                  Logout

                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </nav>
  );
}