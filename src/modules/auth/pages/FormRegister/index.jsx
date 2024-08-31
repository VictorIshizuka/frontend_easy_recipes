import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useRegisterMutation } from "../../../../common/slices/usersApiSlice";

export const FormRegister = () => {
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const userData = await register({
          name,
          email,
          password,
        }).unwrap();
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword();
        toast.success(userData.message);
        navigate("/login");
        return;
      }
      toast.error("Passwords must be the same");
    } catch (error) {
      toast.error(error.data.message);
    }
  }

  return (
    <div className="mt-5">
      <h4 className="mt-4 text-center">Register</h4>
      <div className="d-flex justify-content-center ">
        <form className="col-4" onSubmit={onSubmit}>
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
          <div className="row my-2">
            <div className="col">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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
