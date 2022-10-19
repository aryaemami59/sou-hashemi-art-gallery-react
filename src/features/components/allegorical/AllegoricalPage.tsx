import { FC, memo } from "react";

const AllegoricalPage: FC = () => (
  <div className="container px-3 py-5 custom-max-width">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-5 my-5">
        <img
          src="img/allegorical/1.jpg"
          alt="1"
          className="img-fluid rounded w-100 shadow"
        />
      </div>
      <div className="col-12 col-sm-10 col-md-5 my-5">
        <img
          src="img/allegorical/2.jpg"
          alt="1"
          className="img-fluid rounded w-100 shadow"
        />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-5 my-5">
        <img
          src="img/allegorical/3.jpg"
          alt="1"
          className="img-fluid rounded w-100 shadow"
        />
      </div>
      <div className="col-12 col-sm-10 col-md-5 my-5">
        <img
          src="img/allegorical/4.jpg"
          alt="1"
          className="img-fluid rounded w-100 shadow"
        />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-5 my-5">
        <img
          src="img/allegorical/5.jpg"
          alt="1"
          className="img-fluid rounded w-100 shadow"
        />
      </div>
      <div className="col-12 col-sm-10 col-md-5 my-5">
        <img
          src="img/allegorical/6.jpg"
          alt="1"
          className="img-fluid rounded w-100 shadow"
        />
      </div>
    </div>
  </div>
);

export default memo(AllegoricalPage);
