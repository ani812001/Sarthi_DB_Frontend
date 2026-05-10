import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  /* Handle Input Change */
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  /* Handle Login */
  const handleSubmit = async (e) => {

    e.preventDefault();

    setIsLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password
        }
      );

      /* Save JWT Token */
      localStorage.setItem(
        "token",
        res.data.token
      );

      /* Save Auth State */
      localStorage.setItem(
        "isAuthenticated",
        "true"
      );

      /* Save User Data */
      localStorage.setItem(
        "userName",
        res.data.user.name
      );

      localStorage.setItem(
        "userEmail",
        res.data.user.email
      );

      /* Redirect */
      navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setIsLoading(false);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] px-4">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-20 h-20"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mt-1 mb-6 text-sm">
            Login to your account
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* Email */}
            <div>

              <label className="text-sm text-gray-600">
                Email
              </label>

              <div className="relative mt-1">

                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none text-sm"
                  required
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-sm text-gray-600">
                Password
              </label>

              <div className="relative mt-1">

                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none text-sm"
                  required
                />

              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white font-medium hover:opacity-90 transition"
            >

              {isLoading
                ? "Logging in..."
                : "Login"}

            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">

            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-violet-600 font-medium"
            >
              Sign up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}