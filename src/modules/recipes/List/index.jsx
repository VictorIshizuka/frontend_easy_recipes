export const ListRecipes = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Easy Recipes</h1>
        </div>
        <div className="col-6">
          <a>Log in</a>
          <a>Register</a>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h3>filters</h3> <label>Search</label> <input type="text" />
        </div>
        <div className="col">Recipes</div>
      </div>
    </div>
  );
};
