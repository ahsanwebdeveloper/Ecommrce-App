import React from "react";
import "/src/Component/Extraservice/Extra.css"

const suppliers = [
  { country: 'Arabic Emirates', url: 'shopname.ae', img: '/image/AE@2x.png' },
  { country: 'Australia', url: 'shopname.ae', img: '/image/AU@2x.png' },
  { country: 'United States', url: 'shopname.ae', img: '/image/US@2x.png' },
  { country: 'Russia', url: 'shopname.ru', img: '/image/RU@2x.png' },
  { country: 'Italy', url: 'shopname.it', img: '/image/IT@2x.png' },
  { country: 'Denmark', url: 'denmark.com.dk', img: '/image/DK@2x.png' },
  { country: 'France', url: 'shopname.com.fr', img: '/image/FR@2x.png' },
  { country: 'China', url: 'shopname.ae', img: '/image/CN@2x.png' },
  { country: 'Great Britain', url: 'shopname.co.uk', img: '/image/AE@2x.png' },
  { country: 'Arabic Emirates', url: 'shopname.ae', img: '/image/AE@2x.png' },
  
];
const services = [
  {
    title: "Source from Industry Hubs",
    img: "/image/image 104.png",

    
  },
  {
    title: "Customize Your Products",
    img: "/image/image 106.png",

  },
  {
    title: "Fast, reliable shipping by ocean or air",
    img: "/image/image 107.png",
  },
  {
    title: "Product monitoring and inspection",
    img: "/image/image 108.png",
  },
];

const Extra = () => {
  return (
    <div className="services-section">
      <h2>Our extra services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <div className="icon">{service.icon}</div>
            <p>{service.title}</p>
          </div>
        ))}
      </div>
      <div className="suppliers-section">
      <h2>Suppliers by region</h2>
      <div className="suppliers-grid">
        {suppliers.map((supplier, index) => (
          <div key={index} className="supplier-card">
            <img
              src={supplier.img}
              alt={supplier.country}
              className="flag-img"
            />
            <div>
              <div className="country">{supplier.country}</div>
              <div className="url">{supplier.url}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
     
      
    
  );
};

export default Extra;
