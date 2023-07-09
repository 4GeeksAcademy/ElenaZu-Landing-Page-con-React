import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-style">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-end" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-list">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default NavBar

