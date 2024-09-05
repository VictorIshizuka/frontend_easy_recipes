import { useNavigate, useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import { useGetRecipeQuery } from "../../../../common/slices/recipesApiSlice";

export const Item = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: recipe, isLoading, error } = useGetRecipeQuery(params.id);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <>
          <img
            src={`/images/${recipe?.image}`}
            alt={recipe?.name}
            className="img-fluid"
            style={{ margin: "20px 0 20px 0" }}
          />
          <h1>{recipe.name}</h1>
          <p>
            <b>Author: </b> {recipe.author}
          </p>
          <p>
            <b>Category: </b> {recipe.category}
          </p>
          <p>
            <b>Difficulty: </b> {recipe.difficulty}
          </p>
          <p>{recipe.description}</p>
          <div>{HTMLReactParser(recipe.body)}</div>
        </>
      )}
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Back to home
      </button>
    </>
  );
};
