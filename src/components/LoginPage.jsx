import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/auth.css";

export default function Loginpage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    if (isLogin) {
      // 🔹 LOGIN LOGIC
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        setError("No user found. Please register first.");
        return;
      }

      if (
        storedUser.email === form.email &&
        storedUser.password === form.password
      ) {
        alert("Login Successful ✅");

        // ✅ SAVE LOGIN STATE
        localStorage.setItem("isLoggedIn", "true");

        // optional: store logged in user
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(storedUser)
        );

        navigate("/");

        // 🔥 important for navbar update
        window.location.reload();
      } else {
        setError("Invalid email or password ❌");
      }

    } else {
      // 🔹 REGISTER LOGIC

      const existingUser = JSON.parse(localStorage.getItem("user"));

      if (existingUser && existingUser.email === form.email) {
        setError("User already exists. Please login.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(form));

      alert("Registration Successful ✅");

      // switch to login
      setIsLogin(true);

      // clear form
      setForm({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>{isLogin ? "Login to QuickKart" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
}