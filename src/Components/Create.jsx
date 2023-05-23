import React from "react";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <>
      <TopNav />
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-12 mx-auto text-center w-50 border rounded p-2">
            <h4 className="text-info fs-3">CREATE ACCOUNT</h4>
            <hr />
            <form action="#" method="post">
              <input
                type="text"
                className="form-group form-control mt-3"
                name=""
                placeholder="First-name"
                id=""
              />
              <input
                type="text"
                className="form-group form-control mt-3"
                name=""
                placeholder="Last-name"
                id=""
              />
              <input
                type="text"
                className="form-group form-control mt-3"
                name=""
                placeholder="E-mail"
                id=""
              />
              <input
                type="text"
                className="form-group form-control mt-3"
                name=""
                placeholder="Phone Number"
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
              className="btn btn-outline-primary w-100 mt-4"
              type="submit"
            >
              Log In
            </button>
            <Link to="/login">
              <input type="checkbox" className="mx-2 mt-4" name="" id="" />I
              already have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
