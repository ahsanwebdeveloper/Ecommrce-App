import React from 'react';
import '/src/Component/ProductDescritption/ProductDescription.css'

const ProductDescription = () => {
  return (
    <div className="product-container">
      <p className="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <table className="product-table">
        <tbody>
          <tr>
            <td>Model</td>
            <td>#8786867</td>
          </tr>
          <tr>
            <td>Style</td>
            <td>Classic style</td>
          </tr>
          <tr>
            <td>Certificate</td>
            <td>ISO-898921212</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>34mm x 450mm x 19mm</td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>36GB RAM</td>
          </tr>
        </tbody>
      </table>

      <ul className="product-features">
        <li>✓ Some great feature name here</li>
        <li>✓ Lorem ipsum dolor sit amet, consectetur</li>
        <li>✓ Duis aute irure dolor in reprehenderit</li>
        <li>✓ Some great feature name here</li>
      </ul>
    </div>
  );
};

export default ProductDescription;
