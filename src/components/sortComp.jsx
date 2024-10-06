import React, { useState, useEffect } from "react";
import albums from "../components/data/images.js";

const SortComp = ({ onSortChange }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownSortOpen, setIsDropdownSortOpen] = useState(false);

  const [originalAlbums, setOriginalAlbums] = useState([]);

  useEffect(() => {
    setOriginalAlbums([...albums]); // Save the original state
    onSortChange(albums); // Initially pass the original array to the parent
  }, [onSortChange]); // Add 'onFilterChange' to dependency array

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
      case "reset":
        sortedArray = [...originalAlbums]; // Reset to original array
        break;
      default:
        break;
    }

    onSortChange(sortedArray); // Pass the sorted array back to the parent
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    handleSort(value);
    setIsDropdownSortOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="container-button-row">
      <div className="filter-button">
        <div
          className="dropdown-sort"
          onClick={() => setIsDropdownSortOpen(!isDropdownSortOpen)}
        >
          {selectedValue
            ? selectedValue === "release"
              ? "order by release year"
              : selectedValue === "priceLowToHigh"
              ? "price: low to high"
              : selectedValue === "priceHighToLow"
              ? "price: high to low"
              : "sort"
            : "sort"}
        </div>
        {isDropdownSortOpen && (
          <div className="dropdown-list">
            <div
              className="dropdown-item"
              onClick={() => handleSelect("reset")}
            >
              sort
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleSelect("release")}
            >
              order by release year
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleSelect("priceLowToHigh")}
            >
              price: low to high
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleSelect("priceHighToLow")}
            >
              price: high to low
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortComp;
