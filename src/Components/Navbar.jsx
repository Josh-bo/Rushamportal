import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Navbar = () => {
  return (
    <>
      <nav className="head-top navbar navbar-expand-lg bg-body-tertiary fixed-top ps-4">
      <div className="container-fluid">
        <a className=" navbar-brand" href="#">Rusham</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center"  id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Airtime to cash</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Naira Pin</a>
            </li>
          </ul>
        </div>
      </div>
</nav>
    </>
  );
}

export default Navbar;