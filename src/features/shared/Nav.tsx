import { FC, memo } from "react";
import Dropdown from "./Dropdown";

const Nav: FC = () => (
  <nav className="navbar navbar-expand-sm navbar-light sticky-top w-100 shadow js-navbar">
    <div className="container">
      <button
        className="btn btn-lg btn-adn bg-transparent js-dark-mode border-0 text-dark"
        title="Switch to Dark Mode"
        data-bs-toggle="tooltip">
        <i className="fas fa-solid fa-circle-half-stroke" />
      </button>
      <a
        className="navbar-brand"
        href="index.html">
        {}
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="collapsibleNavId">
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item active">
            <a
              className="nav-link custom-underline fw-bold"
              href="index.html">
              Home
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-underline"
              href="about.html">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-underline"
              href="contact.html">
              Contact
            </a>
          </li>
          <Dropdown />
        </ul>
      </div>
    </div>
  </nav>
);

export default memo(Nav);
