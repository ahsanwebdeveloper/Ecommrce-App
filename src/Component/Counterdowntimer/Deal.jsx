import React from "react";
import "/src/Component/Counterdowntimer/Deal.css"
import { useEffect, useState } from 'react';


const Deal = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-05-10') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    { name: 'Smart watches', image: '/image/19.jpg', discount: '-25%' },
    { name: 'Laptops', image: '/image/20.jpg', discount: '-15%' },
    { name: 'GoPro cameras', image: '/image/21.jpg', discount: '-40%' },
    { name: 'Headphones', image: '/image/22.jpg', discount: '-25%' },
    { name: 'Canon cameras', image: '/image/23.jpg', discount: '-25%' },
  ];

  return (
    <div className="section">
    <div className="sale-section">
      <div className="sale-timer">
        <div>
        <h3 className="title">Deals and offers</h3>
        <p className="subtitle">Hygiene equipments</p>
        </div>
        <div className="countdown">
          <div className="time-box" id="timeid"><span>{timeLeft.days}</span><p>Days</p></div>
          <div className="time-box"><span>{timeLeft.hours}</span><p>Hour</p></div>
          <div className="time-box"><span>{timeLeft.minutes}</span><p>Min</p></div>
          <div className="time-box" ><span>{timeLeft.seconds}</span><p>Sec</p></div>
        </div>
      </div>

      <div className="sale-products">
        {products.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.image} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <span className="discount">{item.discount}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Deal;
