import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav row p-2">
      {/* <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Main
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="login">
            Sing in / Sing up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="products">
            Basket
          </Link>
        </li>
      </ul> */}

      <div className="nav-item col-1">
        <Link className="nav-link active" aria-current="page" to="/">
          Main
        </Link>
      </div>
      <div className="nav-item col-1 ">
        <Link className="nav-link active" aria-current="page" to="login">
          Login
        </Link>
      </div>
      <div className="nav-item col-1">
        <Link className="nav-link active" aria-current="page" to="products">
          Products
        </Link>
      </div>

      <div className="nav-item col-md-2 offset-md-7">
        <Link className="nav-link active" aria-current="page" to="basket">
          Basket
        </Link>
      </div>

      {/* <div className="nav-item d-flex justify-content-end">
        <Link className="nav-link active" aria-current="page" to="login">
          Sing in / Sing up
        </Link>
      </div> */}
    </div>
  );
};

export default NavBar;
