import { FC, memo } from "react";

const Dropdown: FC = () => (
  <li className="nav-item dropdown">
    <button
      className="dropdown-toggle border-0 btn"
      id="dropdownId"
      data-bs-toggle="dropdown"
      aria-expanded="false">
      Work
    </button>
    <div
      className="dropdown-menu dropdown-menu-dark"
      aria-labelledby="dropdownId">
      <a
        className="dropdown-item"
        href="waterColorPaintings.html">
        Watercolor Paintings
      </a>
      <a
        className="dropdown-item"
        href="allegorical.html">
        Allegorical Rapidograph Art
      </a>
      <a
        className="dropdown-item"
        href="soap.html">
        Soap Art
      </a>
      <a
        className="dropdown-item"
        href="pastel.html">
        Pastel
      </a>
    </div>
  </li>
);

export default memo(Dropdown);
