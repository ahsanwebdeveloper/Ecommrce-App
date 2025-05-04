import React from "react";
import "/src/Component/Anothfilter/Anothfilter.css";

export default function AppliedFilters() {
  const filters = ["Samsung", "Apple", "Poco", "Metallic", "4 star", "3 star"];

  return (
    <div className="applied-filters">
      <div className="filter-tags">
        {filters.map((filter, idx) => (
          <div key={idx} className="tag">
            {filter}
            <span className="close">✕</span>
          </div>
        ))}
      </div>
      <button className="clear">Clear all filters</button>
    </div>
  );
}
