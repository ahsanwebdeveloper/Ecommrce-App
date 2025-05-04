import React from 'react';
import '/src/Component/Productname/Productlist.css';

const products = [
  {
    id: 1,
    title: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998,
    oldPrice: 1128,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'image/13.jpg',
  },
  {
    id: 2,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation...',
    image: 'image/17.jpg',
  },
  {
    id: 3,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation...',
    image: 'image/18.jpg',
  },
  {
    id: 4,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation...',
    image: 'image/19.jpg',
  },
  {
    id: 5,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation...',
    image: 'image/20.jpg',
  },
  {
    id: 6,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation...',
    image: 'image/21.jpg',
  },
  // Repeat or map additional similar objects
];

const ProductList = () => {
  return (
    <div className="product-list1">
      {products.map(product => (
        <div className="product-card1" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image1" />
          <div className="product-details1">
            <h3>{product.title}</h3>
            <div className="price-section1">
              <span className="price1">${product.price.toFixed(2)}</span>
              {product.oldPrice && <span className="old-price1">${product.oldPrice.toFixed(2)}</span>}
            </div>
            <div className="meta1">
              <span className="rating1">★ {product.rating}</span>
              <span className="orders1">{product.orders} orders</span>
              {product.freeShipping && <span className="free-shipping1">• Free Shipping</span>}
            </div>
            <p className="description1">{product.description}</p>
            <a href="#" className="view-details1">View details</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
