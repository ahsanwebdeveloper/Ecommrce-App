import React from 'react';
import '/src/Component/Youmake/Youmake.css';

const items = [
  {
    image: 'image/1.jpg',
    title: 'Men Blazers Sets Elegant Formal',
    price: '$7.00 - $99.50',
  },
  {
    image: 'image/2.jpg',
    title: 'Men Shirt Sleeve Polo Contrast',
    price: '$7.00 - $99.50',
  },
  {
    image: 'image/3.jpg',
    title: 'Apple Watch Series Space Gray',
    price: '$7.00 - $99.50',
  },
  {
    image: 'image/4.jpg',
    title: 'Basketball Crew Socks Long Stuff',
    price: '$7.00 - $99.50',
  },
  {
    image: 'image/5.jpg',
    title: "New Summer Men's castrol T-Shirts",
    price: '$7.00 - $99.50',
  },
  {
    image: 'image/6.jpg',
    title: "New Summer Men's castrol T-Shirts",
    price: '$7.00 - $99.50',
  },
];

const Youmake= () => {
  return (
    <div className=".recommendation-box">
      <h3 className="recommendation-title">You may like</h3>
      <ul className="recommendation-list">
        {items.map((item, index) => (
          <li className="recommendation-item" key={index}>
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-info">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Youmake;
