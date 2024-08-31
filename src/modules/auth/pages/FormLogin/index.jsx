import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { useLoginMutation } from "../../../../common/slices/usersApiSlice";
import { setCredentials } from "../../../../common/slices/authSlice";

export const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { userInfo } = useSelector(state => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const userData = await login({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials(userData));
      setEmail("");
      setPassword("");
      toast.success("Welcome");
      navigate("/");
    } catch (error) {
      toast.error(error.data.message);
    }
  }

  return (
    <div className="mt-5">
      <h4 className="mt-4 text-center">Login</h4>
      <div className="d-flex justify-content-center ">
        <form className="col-4" onSubmit={onSubmit}>
          <div className="row my-2">
            <div className="col">
              <label className="form-label">E-mail</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="row text-center mt-3">
            <div className="col">
              <button type="submit" className="btn btn-warning w-100 me-1">
                Enter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
