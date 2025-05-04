import React from "react";
import "/src/Component/Carddetail/Carddetail.css";

const Carddetail = () => {
  return (
    <div className="product-detail-container">
      <div className="gallery-section">
        <img src="image/2.jpg" alt="Main product" className="main-img" />
        <div className="thumbnail-row">
          {[...Array(5)].map((_, idx) => (
            <img
              key={idx}
              src="image/2.jpg"
              alt={`Thumbnail ${idx}`}
              className="thumb-img"
            />
          ))}
        </div>
      </div>

      <div className="info-section">
        <p className="stock-status">✔ In stock</p>
        <h2 className="product-title">
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h2>
        <div className="product-meta">
          <span className="stars">★★★★☆</span>
          <span className="rating-score">9.3</span>
          <span className="reviews">32 reviews</span>
          <span className="sold">154 sold</span>
        </div>

        <div className="price-boxes">
          <div className="price-box">
            <p className="price">$98.00</p>
            <p className="range">50–100 pcs</p>
          </div>
          <div className="price-box">
            <p className="price">$90.00</p>
            <p className="range">100–700 pcs</p>
          </div>
          <div className="price-box">
            <p className="price">$78.00</p>
            <p className="range">700+ pcs</p>
          </div>
        </div>
         
        <div className="product-details">
          <div className="product-detail-part">
          <p className="para">Price:</p>
          <p> Negotiable</p>
          </div>
          <div className="line"></div>
          <div className="product-detail-part">
          <p className="para">Type:</p><p> Classic shoes</p>
          </div>
          <div className="product-detail-part">
          <p className="para">Material:</p><p> Plastic material</p>
          </div>
          <div className="product-detail-part">
          <p className="para">Design:</p><p> Modern nice</p>
          </div>
          <div className="line"></div>
          <div className="product-detail-part">
          <p className="para">Customization:</p><p> Customized logo and design custom packages</p>
          </div>
          <div className="product-detail-part">
          <p className="para">Protection:</p><p> Refund Policy</p>
          </div>
          <div className="product-detail-part">
          <p className="para">Warranty:</p><p> 2 years full warranty</p>
          </div>
        </div>
      </div>

      <div className="supplier-section">
        <div className="supplier-header">
          <div className="supplier-avatar">R</div>
          <div>
            <div className="supplier-title">Supplier</div>
            <div className="supplier-name">Guanjoi Trading LLC</div>
          </div>
        </div>
        <div className="supplier-details">
          <p>🇩🇪 Germany, Berlin</p>
          <p>✔ Verified Seller</p>
          <p>🌐 Worldwide shipping</p>
        </div>
        <button className="btn-inquiry">Send inquiry</button>
        <button className="btn-profile">Seller’s profile</button>
        <p className="save-later">♡ Save for later</p>
      </div>
      
    </div>
  );
};

export default Carddetail;
