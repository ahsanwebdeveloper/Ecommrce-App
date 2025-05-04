import React from "react";
import '/src/Component/Productcard/Productcard.css';
 
const products = [
    { price: "$10.30", title: "T-shirts with multiple colors, for men", img: "image/1.jpg" },
    { price: "$10.30", title: "Jeans shorts for men blue color", img: "image/2.jpg" },
    { price: "$12.50", title: "Brown winter coat medium size", img: "image/3.jpg" },
    { price: "$34.00", title: "Jeans bag for travel for men", img: "image/4.jpg" },
    { price: "$99.00", title: "Leather wallet", img: "image/5.jpg" },
    { price: "$9.99", title: "Canon camera black, 100x zoom", img: "image/6.jpg" },
    { price: "$8.99", title: "Headset for gaming with mic", img: "image/7.jpg" },
    { price: "$10.30", title: "Smartwatch silver color modern", img: "image/8.jpg" },
    { price: "$10.30", title: "Blue wallet for men leather material", img: "image/9.jpg" },
    { price: "$80.95", title: "Jeans bag for travel for men", img: "image/10.jpg" },
    { price: "$10.30", title: "Blue wallet for men leather material", img: "image/1.jpg" },
    { price: "$80.95", title: "Jeans bag for travel for men", img: "image/2.jpg" },
  ];
  
  const Productcard= () => {
    return (
      <div className="container">
        <h2>Recommended items</h2>
        <div className="grid">
          {products.map((product, index) => (
            <div className="card" key={index}>
               <img src={product.img} alt={product.title} />
              <p className="price">{product.price}</p>
              <p className="title">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Productcard;