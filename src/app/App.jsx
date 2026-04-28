import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

/* Pages (ALL DEFAULT IMPORTS) */
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Data from "./pages/Data";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

/* 🔒 Protected Route */
function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  return isAuth ? children : <Navigate to="/login" replace />;
}

/* 🚫 Public Route */
function PublicRoute({ children }) {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  return !isAuth ? children : <Navigate to="/" replace />;
}

/* 🧠 Layout */
function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/search" element={<Search />} />
          <Route path="/data" element={<Data />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

/* 🚀 App */
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans">
        <Routes>

          {/* Public */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Protected */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}