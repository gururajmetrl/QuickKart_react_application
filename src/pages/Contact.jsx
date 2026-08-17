import "../css/contact.css";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent ✅");
  };
  return (
    <div className="contact-container">

      <div className="contact-box">
        <h2>Contact QuickKart</h2>
        <p className="subtitle">We’d love to hear from you 💬</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message" rows="4"></textarea>

          <button type="submit" onClick={onSubmit}>
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}