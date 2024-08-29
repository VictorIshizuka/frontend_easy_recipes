import { useGetRecipesQuery } from "../../../../common/slices/recipesApiSlice";

export const ListRecipes = () => {
  const { data: recipes, error, isLoading } = useGetRecipesQuery();

  return (
    <div className="col">
      <h1 className="my-4">Browser Recipes</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          error
        ) : (
          recipes?.map((recipe, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-4 mb-3">
                  <img
                    className="img-fluid"
                    src={`/images/${recipe.image}`}
                    alt={recipe.name}
                  />
                </div>
                <div className="col-8">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p>{recipe.description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
