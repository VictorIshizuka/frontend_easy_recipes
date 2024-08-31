import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useGetRecipesQuery } from "../../../../common/slices/recipesApiSlice";

export const ListRecipes = () => {
  const navigate = useNavigate();

  const filter = useSelector(state => state.filter);

  const { data: recipes, error, isLoading } = useGetRecipesQuery(filter);
  return (
    <div className=" m-3 position-relative">
      <h1 className="mb-4">Browser Recipes</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          error.data?.message
        ) : (
          recipes?.map((recipe, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-4 mb-3">
                  <img
                    className="img-fluid"
                    onClick={() => navigate(`/item/${recipe._id}`)}
                    src={`/images/${recipe.image}`}
                    alt={recipe.name}
                  />
                </div>
                <div className="col-8 p-1">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="me-3">{recipe.description}</p>
                  <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => navigate(`/item/${recipe._id}`)}
                  >
                    View recipe
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
