import { Link } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to QuickKart🛒</h1>
        <p>Your one-stop destination for all products</p>
        <Link to="/products" className="btn">
          Shop Now
        </Link>
      </section>

      {/* Features */}
      <section className="features">
        <div className="card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your products delivered quickly</p>
        </div>

        <div className="card">
          <h3>💰 Best Prices</h3>
          <p>Affordable prices on all products</p>
        </div>

        <div className="card">
          <h3>🔒 Secure Payment</h3>
          <p>100% secure payment options</p>
        </div>
      </section>

    </div>
  );
}