import React from 'react';
import '/src/Component/Filter/Filter.css';

const ContentTop = () => {
  return (
    <div className="content-top">
      <div className="left">
        <span><strong>12,911</strong> items in <strong>Mobile accessory</strong></span>
      </div>
      
      <div className="right">
        <label className="verified">
          <input type="checkbox" />
          Verified only
        </label>

        <select className="dropdown">
          <option>Featured</option>
          <option>Lowest Price</option>
          <option>Highest Rated</option>
        </select>

        <div className="view-toggle">
          <button className="grid active">
            <img src='image/Vector94.png'></img>
          </button>
          <button className="list">≡</button>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
