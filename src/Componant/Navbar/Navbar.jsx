import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end bg_nav py-2 px-4"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img className="logo" src={logo} alt="" />
              </h5>
              <button
                type="button"
                className="btn-close icon-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="div_cart">
        <span className="icon_cart"><i className="fa-solid fa-cart-shopping"></i></span>
      </div>
    </div>
  );
}
