import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { FilterList } from "../../../modules/recipes/pages/Filter";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const userInfo = useSelector(state => state.auth.userInfo);
  const [logoutApiCall] = useLogoutMutation();

  async function handleLogout() {
    const res = await logoutApiCall();
    dispatch(logout());
    navigate("/");
    toast.success(res.message);
  }

  return (
    <>
      <header className="bg-dark text-white">
        <div className="container">
          <div className="row" style={{ height: "80px" }}>
            <div className="col-6 d-flex align-items-center">
              <h1 onClick={() => navigate("/")}>Easy Recipes</h1>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end ">
              {userInfo === null ? (
                <>
                  {pathname !== "/login" && (
                    <Link
                      className="btn btn-warning link-underline-dark"
                      to="/login"
                    >
                      Log in
                    </Link>
                  )}
                  {pathname !== "/register" && (
                    <Link
                      className="btn btn-secondary link-underline-dark ms-2"
                      to="/register"
                    >
                      Register
                    </Link>
                  )}
                </>
              ) : (
                <>
                  {userInfo !== null && (
                    <button
                      className="btn btn-danger link-underline-dark ms-2"
                      onClick={handleLogout}
                      type="button"
                    >
                      Hi {userInfo.name}, Log out
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <FilterList />
          </div>
          <div className="col-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
