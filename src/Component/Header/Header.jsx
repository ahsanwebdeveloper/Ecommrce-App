import React from "react"
import  { useState } from 'react';
import "/src/Component/Header/Header.css"
import Sidbar from "../Sidbar/Sidbar";

const Header=()=>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
      <div className="amin-header">
        <div className="logo">
          <div className="logo-part1">
          <img src="" onClick={() => setIsSidebarOpen(true)}></img>
          <Sidbar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <img src="/image/logo-colored.svg"></img>
        </div>
        <div className="logo-part">
        <img src="image/Vector90.png"></img>
            <img src="image/Vector91.png"></img>
        </div>
        </div>
        <div className="input">
          <input type="text" placeholder="search"></input>
        </div>
        <div className="manubtn">
          <a href="#">All category</a>
          <a href="#">Gadgets</a>
          <a href="#">Clothes</a>
          <a href="#">Accesery</a>
        </div>
        
         
        <header className="header">
        <div className="header__left">
          <div className="brand">
            <div className="brand__icon"><img src="/image/logo-colored.svg"></img></div>
            
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input" />
            <select className="category-select">
              <option>All category</option>
            </select>
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="header__right">
          <div className="nav-item">
            
            <img src="/image/vector3.png" alt="log" />
            <div>
            <span>Profile</span>
            </div>
          </div>
          <div className="nav-item">
          <img src="/image/vector2.png" alt="log" />
          <div>
            <span>Message</span>
            </div>
          </div>
          <div className="nav-item">
          <img src="/image/vector1.png" alt="log" />
          <div>
            <span>Orders</span>
            </div>
          </div>
          <div className="nav-item">
          <img src="/image/vector3.png" alt="log" />
          <div>
            <span>My cart</span>
            </div>
          </div>
        </div>

      </header>
      <div className="navbar">
      <div className="nav-left">
        <div className="nav-item">
          <span className="menu-icon">☰</span>
          <span>All category</span>
        </div>
        <a href="#">Hot offers</a>
        <a href="#">Gift boxes</a>
        <a href="#">Projects</a>
        <a href="#">Menu item</a>
        <a href="#">Help <span className="arrow">▾</span></a>
      </div>

      <div className="nav-right">
        <a href="#">English, USD <span className="arrow">▾</span></a>
        <a href="#">
          Ship to <img src="/image/IT@2x.png" alt="Germany Flag" className="flag" />
          <span className="arrow">▾</span>
        </a>
      </div>
    </div>
    
      </div>
     
    )
}
export default Header