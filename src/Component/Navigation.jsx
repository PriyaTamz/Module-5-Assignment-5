import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ cartItemsCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#!">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#!">All Products</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#!">Popular Items</Link></li>
                <li><Link className="dropdown-item" to="#!">New Arrivals</Link></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-dark" to="/items">
              <i className="fa fa-shopping-cart me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-2 rounded-pill">{cartItemsCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
