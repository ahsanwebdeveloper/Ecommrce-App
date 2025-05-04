import React from "react";
import '/src/Component/Catagerycard1/Catagerycard1.css'
const products = [
  { name: "Magazine Rack", image: "image/8.jpg", price: "USD 14" },
  { name: "Armchair", image: "image/8.jpg", price: "USD 14" },
  { name: "Side Table", image: "image/8.jpg", price: "USD 14" },
];
const items = [
  { title: "T-shirt with multiple color", price: "$ 12.9", img: "image/8.jpg" },
  { title: "J eans shorts for men blue color", price: "$ 19", img: "image/8.jpg" },
  { title: "Brown winter coat medium size", price: "$ 19", img: "image/9.jpg" },
  { title: "Jeans bag for travel for men", price: "$ 19", img: "image/10.jpg" },
  { title: "leather wallet", price: "$ 100", img: "image/13.jpg" },
  { title: "Brown winter coat medium size", price: "$ 19", img: "image/9.jpg" },
  { title: "Jeans bag for travel for men", price: "$ 19", img: "image/10.jpg" },
  { title: "leather wallet", price: "$ 100", img: "image/13.jpg" }
];
const Categorycard1 = () => {
  return (
    <div className="main-card">
    <div className="category-card-container">
      {/* Left Section */}
      <div className="left-section">
        <h2>Home and <br /> Outdoor</h2>
        <button>Source now</button>
        
      </div>

      {/* Right Section */}
      <div className="right-section">
        {items.map((item, index) => (
          <div key={index} className="product-box">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
      </div>
    
      <div className="home-section">
      <h3 className="section-title">Home and outdoor</h3>
      <div className="product-scroll">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <img src={item.image} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <p className="product-price">{item.price}</p>
          </div>
        ))}
      </div>
      <a className="source-link" href="#">Source now →</a>
    </div>
</div>


    
  );
};

export default Categorycard1;
