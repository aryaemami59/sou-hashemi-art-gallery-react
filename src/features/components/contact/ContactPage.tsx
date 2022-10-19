import { FC, memo } from "react";

const ContactPage: FC = () => (
  <div className="container px-3 py-5">
    <div className="row my-5 justify-content-center">
      <div className="col-10 col-md-8 col-lg-6 text-center">
        <h1 className="ps-2 mb-4 text-start">Contact</h1>
        <form>
          <div className="input-group-lg">
            <div className="form-floating">
              <input
                type="text"
                className="form-control shadow rounded-pill ps-4 my-3"
                id="fullName"
                placeholder="Full Name"
              />
              <label
                htmlFor="fullName"
                className="ps-4">
                Full Name
              </label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control shadow rounded-pill ps-4 my-3"
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
              <textarea
                name="message"
                id="message"
                className="form-control ps-4 custom-border-radius shadow my-3"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="ps-4">
                Message
              </label>
            </div>
            <button
              type="button"
              className="btn rounded-pill fw-bold px-4 shadow text-white custom-btn send-message">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default memo(ContactPage);
