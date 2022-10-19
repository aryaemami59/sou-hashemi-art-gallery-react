import { FC, memo } from "react";

const Footer: FC = () => (
  <footer className="site-footer shadow-lg p-1 p-md-4">
    <div className="container-fluid container-md">
      <div className="row justify-content-center">
        <div className="col text-center my-5">
          <a
            href="https://www.facebook.com/sou.hashemi.5"
            className="btn btn-social-icon mx-sm-1 mx-md-2 rounded-circle btn-lg shadow btn-facebook"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-facebook-f fs-4" />
          </a>
          <a
            href="https://www.instagram.com/hashemi1889"
            className="btn btn-social-icon mx-sm-1 mx-md-2 rounded-circle btn-lg shadow btn-instagram"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-instagram fs-4" />
          </a>
          <a
            href="https://www.twitter.com/hashemi1889"
            className="btn btn-social-icon mx-sm-1 mx-md-2 rounded-circle btn-lg shadow btn-twitter"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-twitter fs-4" />
          </a>
          <a
            href="https://www.pinterest.com/"
            className="btn btn-social-icon mx-sm-1 mx-md-2 rounded-circle btn-lg shadow btn-pinterest"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-pinterest-p fs-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="btn btn-social-icon mx-sm-1 mx-md-2 rounded-circle btn-lg shadow btn-linkedin"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-linkedin-in fs-4" />
          </a>
          <a
            href="https://www.tumblr.com/"
            className="btn btn-social-icon btn-lg mx-sm-1 mx-md-2 rounded-circle shadow btn-tumblr"
            target="_blank"
            role="button"
            rel="noreferrer">
            <i className="fa-brands fa-tumblr fs-4" />
          </a>
        </div>
      </div>
      <div className="row text-center justify-content-center js-links-container">
        <div className="col-10 col-md-4 col-lg-2 my-2 my-md-1 px-1 px-md-3">
          <a
            href="about.html"
            className="text-decoration-none text-black-50 fw-bold custom-underline">
            About
          </a>
        </div>
        <div className="col-10 col-md-4 col-lg-2 my-2 my-md-1 px-1 px-md-3">
          <a
            href="contact.html"
            className="text-decoration-none text-black-50 fw-bold custom-underline">
            Contact Us
          </a>
        </div>
        <div className="col-10 col-md-4 col-lg-2 my-2 my-md-1 px-1 px-md-3">
          <a
            href="waterColorPaintings.html"
            className="text-decoration-none text-black-50 fw-bold custom-underline">
            Watercolor Paintings
          </a>
        </div>
        <div className="col-10 col-md-4 col-lg-2 my-2 my-md-1 px-1 px-md-3">
          <a
            href="allegorical.html"
            className="text-decoration-none text-black-50 fw-bold custom-underline">
            Allegoircal Art
          </a>
        </div>
        <div className="col-10 col-md-4 col-lg-2 my-2 my-md-1 px-1 px-md-3">
          <a
            href="soap.html"
            className="text-decoration-none text-black-50 fw-bold custom-underline">
            Soap Art
          </a>
        </div>
        <div className="col-10 col-md-4 col-lg-2 my-2 my-md-1 px-1 px-md-3">
          <a
            href="pastel.html"
            className="text-decoration-none text-black-50 fw-bold custom-underline">
            Pastel Drawings
          </a>
        </div>
      </div>
      <div className="row my-5 justify-content-center">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 text-center">
          <h1>NEWSLETTER</h1>
          <p className="lead">Stay connected through our monthly newsletter.</p>
          <div className="input-group-lg">
            <div className="form-floating">
              <input
                type="email"
                className="form-control rounded-pill my-3 shadow ps-4"
                id="email"
                placeholder="Email Address"
              />
              <label
                htmlFor="email"
                className="ps-4">
                Email Address
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control rounded-pill my-3 shadow ps-4"
                id="name"
                placeholder="Your First Name"
              />
              <label
                htmlFor="name"
                className="ps-4">
                Your First Name
              </label>
            </div>
            <button
              id="my-button"
              className="btn btn-lg rounded-pill fw-bold px-4 custom-btn shadow text-white"
              type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default memo(Footer);
