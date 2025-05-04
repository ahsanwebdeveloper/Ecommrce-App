import React from 'react';
import '/src/Component/Bomb/Bomb.css';

const Breadcrumb = () => {
  const crumbs = ["Home", "Clothings", "Men's wear", "Summer clothing"];

  return (
    <nav className="breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={index} className="crumb">
          {crumb}
          {index < crumbs.length - 1 && <span className="separator">›</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
