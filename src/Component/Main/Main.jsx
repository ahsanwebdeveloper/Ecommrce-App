import React from "react";
import "/src/Component/Main/Main.css"
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        {/* Left Sidebar */}
        <div className="main-categories">
          <a href="#">Automobiles</a>
          <a href="#">Clothes and wear</a>
          <a href="#">Home interiors</a>
          <a href="#">Computer and tech</a>
          <a href="#">Tools, equipments</a>
          <a href="#">Sports and outdoor</a>
          <a href="#">Animal and pets</a>
          <a href="#">Machinery tools</a>
          <a href="#">More category</a>
        </div>

        {/* Banner Section */}
        <div className="main-banner">
         <Link to="/product"> <img src="/image/main.png" alt="main banner" /></Link>
        </div>

        {/* Right Login Section */}
        <div className="main-login">
          <div className="user-card">
            <div className="user-info">
              <img src="/image/avatar=pic1.jpg" alt="user avatar" />
              <span>Hi, user<br />let's get stated</span>
            </div>
            <button className="btn blue">Join now</button>
            <button className="btn white">Log in</button>
          </div>

          <div className="offer-box orange">
            <p>Get US $10 off<br />with a new supplier</p>
          </div>

          <div className="offer-box teal">
            <p>Send quotes with<br />supplier preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
