import { useDispatch } from "react-redux";

import {
  setCategory,
  setDifficulty,
  setSearchTerm,
} from "../../../../common/slices/filterSlice.js";
import { useGetCategoriesQuery } from "../../../../common/slices/categoriesApiSlice.js";
import { useState } from "react";

export const FilterList = () => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoriesQuery();

  const checkboxes = ["easy", "medium", "hard"];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = e => {
    const value = e.target.value;
    setSelectedItems(
      e.target.checked
        ? [...selectedItems, value]
        : selectedItems.filter(item => item !== value)
    );
    dispatch(
      setDifficulty(
        e.target.checked
          ? [...selectedItems, value]
          : selectedItems.filter(item => item !== value)
      )
    );
  };

  return (
    <div className="col-4">
      <div className="m-4">
        <h3>Filters</h3>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="search" className="form-label">
              Search
            </label>
            <input
              type="text"
              id="search"
              className="form-control"
              onChange={e => dispatch(setSearchTerm(e.target.value))}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Choose category</label>
            <select
              className="form-select"
              id="category"
              onChange={e => dispatch(setCategory(e.target.value))}
            >
              <option value="">All</option>
              {categories?.map((category, index) => (
                <option value={category._id} key={index}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Choose difficulty</label>
            {checkboxes.map((difficulty, index) => (
              <div key={index}>
                <label className="form-label">
                  <input
                    type="checkbox"
                    id={difficulty}
                    value={difficulty}
                    onChange={handleCheckboxChange}
                  />
                  {difficulty}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
