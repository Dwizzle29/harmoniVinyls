import React, { useState } from "react";
import albums from "../components/data/images.js";

const FilterComp = ({ onFilterChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSort = (sortType) => {
    let sortedArray = [...albums];

    switch (sortType) {
      case "release":
        sortedArray.sort((a, b) => parseInt(b.release) - parseInt(a.release));
        break;
      case "priceLowToHigh":
        sortedArray.sort(
          (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
        );
        break;
      case "priceHighToLow":
        sortedArray.sort(
          (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
        );
        break;
      default:
        break;
    }

    onFilterChange(sortedArray); // Pass the sorted array back to the Shop component
  };

  return (
    <div className="container-button-row">
      <select
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          handleSort(e.target.value);
        }}
      >
        <option value="">Select Filter</option>
        <option value="release">Order by Release Year</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterComp;
