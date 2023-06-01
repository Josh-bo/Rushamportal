import React from "react";
import rush from "../assets/rushlogo.png";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="sticky-top bg-light rush">
        <div className="text-center">
          <div className="dropdown">
            <div
              className=""
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="rus" src={rush} alt="" width={"300px"} />
            </div>

            <ul className="dropdown-menu down text-center w-100 bg-light">
              <li className="nav-item mt-2">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item mt-2">
                <Link to="About" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item mt-2">
                <Link to="Contact" className="nav-link">
                  Contact
                </Link>
              </li>

              <li className="mt-2">
                <Link className="dropdown-item" to="/login">
                  <button className="btn btn-outline-info w-50">LOGIN</button>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item border" to="/create">
                  <button className="btn btn-outline-success w-50">
                    Create account
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
