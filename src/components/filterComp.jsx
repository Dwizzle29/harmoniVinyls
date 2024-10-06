import React, { useState } from "react";

const FilterComp = () => {
  const [selectedValue, setSelectedValue] = useState(false);
  const [isDropdownFilterOpen, setIsDropdownFilterOpen] = useState(false);

  const handleSelect = (event) => {
    setSelectedValue(event.target.checked);
  };

  const toggleDropdown = () => {
    setIsDropdownFilterOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownFilterOpen(false);
  };

  return (
    <div className="container-filter-row">
      <div className="filter-button">
        <div className="dropdown-filter" onClick={toggleDropdown}>
          <span>filter</span>
        </div>
        {isDropdownFilterOpen && (
          <div className="dropdown-list-filter">
            <div className="filter-item-title">Genre</div>
            <div className="filter-item">
              <label>pop & rock</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>alternative</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>rnb</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>electronic</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>indie</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>

            <div className="filter-item-title">availability</div>
            <div className="filter-item">
              <label>in stock</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>awaiting restock</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>coming soon</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>

            <div className="filter-item-title">vinyl colour</div>
            <div className="filter-item">
              <label>black</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>clear</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>white</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
              />
            </div>
            <div className="filter-item">
              <label>red</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>blue</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>multi</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>pink</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>purple</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>green</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>
            <div className="filter-item">
              <label>yellow</label>
              <input
                type="checkbox"
                checked={selectedValue}
                onChange={handleSelect}
                className="filter-check"
              />
            </div>

            <button onClick={closeDropdown}>apply</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComp;
