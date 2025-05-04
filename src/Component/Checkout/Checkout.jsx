import React from 'react';
import '/src/Component/Checkout/Checkout.css';

const cartItems = [
  {
    image: 'image/2.jpg',
    title: 'T-shirts with multiple colors, for men and lady',
    details: 'Size: medium, Color: blue,  Material: Plastic',
    seller: 'Artel Market',
    price: '$78.99',
    qty: 9,
  },
  {
    image: 'image/1.jpg',
    title: 'T-shirts with multiple colors, for men and lady',
    details: 'Size: medium, Color: blue,  Material: Plastic',
    seller: 'Best factory LLC',
    price: '$39.00',
    qty: 3,
  },
  {
    image: 'image/3.jpg',
    title: 'T-shirts with multiple colors, for men and lady',
    details: 'Size: medium, Color: blue,  Material: Plastic',
    seller: 'Artel Market',
    price: '$170.50',
    qty: 1,
  },
];

const Checkout = () => {
  return (
    <div className='heading'>
    <h2>MY cat(3)</h2>
    <div className='cart'>
       
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.title} className="cart-image" />
          <div className="cart-info">
            <p className="cart-title">{item.title}</p>
            <p className="cart-details">{item.details}</p>
            <p className="cart-seller">Seller: {item.seller}</p>
            <div className="cart-actions">
              <button className="remove-btn">Remove</button>
              <button className="save-btn">Save for later</button>
            </div>
          </div>
          <div className="cart-summary">
            <span className="cart-price">{item.price}</span>
            <select className="qty-selector" defaultValue={item.qty}>
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  Qty: {n + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <button className="shop-btn">⬅ Back to shop</button>
        <button className="remove-all-btn">Remove all</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Checkout;
