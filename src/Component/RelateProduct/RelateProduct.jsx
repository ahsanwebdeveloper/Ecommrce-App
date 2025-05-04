import React from 'react';
import '/src/Component/RelateProduct/RelateProduct.css';

const savedItems = [
  {
    id: 1,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: '$99.50',
    image: 'image/5.jpg',
  },
  {
    id: 2,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: '$99.50',
    image: 'image/3.jpg',
  },
  {
    id: 3,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: '$99.50',
    image: 'image/2.jpg',
  },
  {
    id: 4,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: '$99.50',
    image: 'image/1.jpg',
  }
];

const RelateProduct = () => {
  return (
    <div className="saved-container">
      <h3>Saved for later</h3>
      <div className="saved-grid">
        {savedItems.map(item => (
          <div key={item.id} className="saved-item">
            <img src={item.image} alt={item.name} />
            <p className="price">{item.price}</p>
            <p className="item-name">{item.name}</p>
            <button className="move-btn">
              <span role="img" aria-label="cart">🛒</span> Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelateProduct;
