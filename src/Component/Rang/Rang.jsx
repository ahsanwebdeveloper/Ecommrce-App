import React from "react";
import "/src/Component/Rang/Rang.css";

const Rang = () => {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h4>Category</h4>
        <label><input type="checkbox" /> Mobile accessory</label>
        <label><input type="checkbox" /> Electronics</label>
        <label><input type="checkbox" /> Smartphones</label>
        <label><input type="checkbox" /> Modern tech</label>
        <button className="see-all">See all</button>
      </div>

      <div className="filter-section">
        <h4>Brands</h4>
        <label><input type="checkbox" /> Samsung</label>
        <label><input type="checkbox" /> Apple</label>
        <label><input type="checkbox" /> Huawei</label>
        <label><input type="checkbox" /> Poco</label>
        <label><input type="checkbox" /> Lenovo</label>
        <button className="see-all">See all</button>
      </div>

      <div className="filter-section">
        <h4>Features</h4>
        <label><input type="checkbox" /> Metallic</label>
        <label><input type="checkbox" /> Plastic cover</label>
        <label><input type="checkbox" /> 6GB Ram</label>
        <label><input type="checkbox" /> Superpower</label>
        <label><input type="checkbox" /> Large memory</label>
        <button className="see-all">See all</button>
      </div>

      <div className="filter-section">
        <h4>Price range</h4>
        <input type="range" min="0" max="999999" />
        <div className="price-inputs">
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
        <button className="apply-btn">Apply</button>
      </div>

      <div className="filter-section">
        <h4>Condition</h4>
        <label><input type="radio" name="condition" defaultChecked /> Any</label>
        <label><input type="radio" name="condition" /> Refurbished</label>
        <label><input type="radio" name="condition" /> Brand new</label>
        <label><input type="radio" name="condition" /> Old items</label>
      </div>

      <div className="filter-section">
        <h4>Ratings</h4>
        {[5, 4, 3, 2].map((stars) => (
          <label key={stars}>
            <input type="checkbox" />
            {"★".repeat(stars)}{"☆".repeat(5 - stars)}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Rang;
