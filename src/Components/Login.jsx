import React from "react";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <TopNav />
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-12 mx-auto text-center w-75 border rounded p-2">
            <h4 className=""><i>LOGIN</i></h4>
            <hr />
            <form action="#" method="post">
              <input
                type="text"
                className="form-group form-control mt-3"
                name=""
                placeholder="E-mail"
                id=""
              />
              <input
                type="password"
                className="form-group form-control mt-3"
                name=""
                placeholder="Password"
                id=""
              />
            </form>
            <button
              className="btn text-light w-100 createBtn mt-4"
              type="submit"
            >
              Log In
            </button>
            <Link to="/create" className="text-dark">
              <input type="checkbox" className="mx-2 mt-4" name="" id="" />I
              don't have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
