import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {  useState } from "react";
import "../css/navbar.css";

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const status = localStorage.getItem("isLoggedIn");
    return status === "true";
  });

  // ✅ cart quantity
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  // ✅ logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="nav">
      <h2>QuickKart</h2>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          Contact
        </NavLink>

        <NavLink to="/products" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          Products
        </NavLink>

        {/* ✅ LOGIN / LOGOUT */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-item logout-btn">
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Login
          </NavLink>
        )}

        {/* ✅ Cart with badge */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Cart 🛒
          {totalQty > 0 && (
            <span className="cart-badge">{totalQty}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;