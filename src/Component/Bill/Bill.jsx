import React from 'react';
import '/src/Component/Bill/Bill.css';

const Bill = () => {
  return (
    <div className="cart-summary-container">
      {/* Coupon Section */}
      <div className="coupon-section">
        <label>Have a coupon?</label>
        <div className="coupon-input-wrapper">
          <input type="text" placeholder="Add coupon" />
          <button>Apply</button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="summary-box">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>$1403.97</span>
        </div>
        <div className="summary-row">
          <span>Discount:</span>
          <span className="discount">- $60.00</span>
        </div>
        <div className="summary-row">
          <span>Tax:</span>
          <span className="tax">+ $14.00</span>
        </div>
        <hr />
        <div className="summary-total">
          <span>Total:</span>
          <span className="total-price">$1357.97</span>
        </div>
        <button className="checkout-btn">Checkout</button>

        {/* Payment Icons */}
        <div className="payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/American_Express_logo_%282018%29.svg" alt="Amex" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" />
        </div>
      </div>
    </div>
  );
};

export default Bill;
