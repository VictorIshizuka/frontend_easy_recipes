import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLogged = true;
  const { pathname } = useLocation();
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container">
          <div className="row" style={{ height: "80px" }}>
            <div className="col-6 d-flex align-items-center">
              <h1 onClick={() => navigate("/")}>Easy Recipes</h1>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end ">
              {isLogged ? (
                pathname !== "/form" && (
                  <Link
                    className="btn btn-warning link-underline-dark"
                    to="/form"
                  >
                    Add recipe
                  </Link>
                )
              ) : (
                <>
                  <Link
                    className="btn btn-warning link-underline-dark"
                    to="/login"
                  >
                    Log in
                  </Link>
                  <Link
                    className="btn btn-secondary link-underline-dark ms-2"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
      <Outlet />
    </>
  );
};
