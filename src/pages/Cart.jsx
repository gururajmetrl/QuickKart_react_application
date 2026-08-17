import { useCart } from "../context/CartContext";
import "../css/cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + (item.qty || 1), 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 Shopping Cart</h2>
        {cart.length > 0 && (
          <span className="cart-badge">{totalItems} {totalItems === 1 ? "item" : "items"}</span>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty 🛍️</p>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Item List */}
          <div className="cart-item-list">
            {cart.map((item) => {
              const itemTotal = item.price * (item.qty || 1);
              return (
                <div key={item.id} className="cart-card">
                  {item.image && (
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                  )}

                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-price">
                      ₹{item.price} × {item.qty || 1}
                    </p>
                  </div>

                  <div className="cart-item-actions">
                    <span className="cart-item-total">₹{itemTotal.toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary Sidebar */}
          <div className="cart-summary-card">
            <h3 className="cart-summary-title">Order Summary</h3>

            <div className="cart-summary-row">
              <span>Items ({totalItems}):</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>

            <div className="cart-summary-row">
              <span>Delivery:</span>
              <span className="delivery-free">FREE</span>
            </div>

            <hr className="cart-divider" />

            <div className="cart-summary-row cart-summary-total">
              <span>Total Amount:</span>
              <span className="total-amount">₹{totalAmount.toFixed(2)}</span>
            </div>

            <button className="btn-checkout">Proceed to Checkout</button>
            <button onClick={clearCart} className="btn-clear">Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}