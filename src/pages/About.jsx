import "../css/about.css";

export default function About() {
  return (
    <div className="about-page">

      {/* Hero Section with Background */}
      <div className="about-hero">
        <div className="overlay">
          <h1>About QuickKart</h1>
          <p>Your trusted online shopping destination</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">

        <h2>Who We Are</h2>
        <p>
          QuickKart is a modern e-commerce platform built to deliver a smooth,
          fast, and enjoyable shopping experience. From electronics to groceries,
          we provide everything you need in one place.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify online shopping by providing high-quality
          products, affordable prices, and lightning-fast delivery.
        </p>

        <h2>Our Vision</h2>
        <p>
          We aim to become one of the most trusted e-commerce platforms by
          ensuring customer satisfaction, innovation, and reliability.
        </p>

      </div>

      {/* Stats Section */}
      <div className="stats">
        <div>
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Products</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team">
        <h2>Our Team</h2>

        <div className="team-cards">
          <div className="member">
            <h4>Gururaj</h4>
            <p>Frontend Developer</p>
          </div>

          <div className="member">
            <h4>Rahul</h4>
            <p>Backend Developer</p>
          </div>

          <div className="member">
            <h4>Sneha</h4>
            <p>UI Designer</p>
          </div>
        </div>
      </div>

    </div>
  );
}