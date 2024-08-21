import { Outlet } from "react-router-dom";

export const FilterList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>filters</h3> <label>Search</label> <input type="text" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
