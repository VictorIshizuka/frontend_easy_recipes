import { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import JodiEditor from "jodit-react";
import { toast } from "react-toastify";

import { useGetCategoriesQuery } from "../../../../common/slices/categoriesApiSlice";
import {
  useAddRecipeMutation,
  useUploadImageMutation,
} from "../../../../common/slices/recipesApiSlice";

export const Form = () => {
  const navigate = useNavigate();
  const editor = useRef(null);

  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");

  const [preview, setPreview] = useState(null);
  const [selectFile, setSelectFile] = useState(null);

  const [addRecipe] = useAddRecipeMutation();
  const [uploadImage] = useUploadImageMutation();
  const { data: categories } = useGetCategoriesQuery();

  useEffect(() => {
    if (!selectFile) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectFile]);

  const uploadFileHandler = async e => {
    setImage(e.target.files[0].name);
    setSelectFile(e.target.files[0]);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await uploadImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await addRecipe({
        name,
        category,
        difficulty,
        image,
        description,
        body,
      }).unwrap();
      setName("");
      setImage("");
      setCategory("");
      setDifficulty("");
      setDescription("");
      setBody("");
      toast.success("Recipe created successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.data.message);
    }
  }

  return (
    <>
      <h4 className="mt-4 text-center">Add Recipe</h4>
      <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={onSubmit}>
          <div className="row my-2">
            <div className="col">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option>Select a category</option>
                {categories?.map((category, index) => (
                  <option value={category._id} key={index}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label className="form-label">Difficulty</label>
              <select
                className="form-select"
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
              >
                <option>Select a difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Image</label>
              <input
                type="file"
                onChange={uploadFileHandler}
                className="form-control"
              />
              {selectFile && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="preview"
                    style={{
                      width: "200px",
                      height: "200px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <label className="form-label">Description</label>
              <textarea
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="form-control h-100"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <label className="form-label">Body</label>
              {/* <textarea
                type="text"
                value={body}
                onChange={e => setBody(e.target.value)}
                className="form-control h-100"
              /> */}
              <JodiEditor
                ref={editor}
                value={body}
                onChange={newContent => setBody(newContent)}
                className="jodit-workplace"
              />
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-6">
              <button type="submit" className="btn btn-warning w-100 me-1">
                Criar
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-outline-danger w-100 ms-1"
                onClick={() => navigate("/")}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
