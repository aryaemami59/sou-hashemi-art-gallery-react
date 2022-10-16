import { FC, memo } from "react";

const MainContainer: FC = () => (
  <div className="container px-3 py-5">
    <div className="row row-content align-items-start">
      <div className="col-md-3 mx-auto overflow-hidden p-0 h-auto shadow w-auto">
        <a href="allegorical.html">
          <img
            src={require("../../shared/img/allegorical/1.jpg")}
            className="img-fluid rounded hover-transform-z opacity-hover"
            alt="allegorical"
          />
        </a>
      </div>
      <div className="ms-3 col-md">
        <h1 className="mt-3 mt-md-0 text-center text-md-start">
          Allegorical Art
        </h1>
        <p className="lead text-center text-md-start para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          delectus esse voluptas voluptate voluptatibus quia. Debitis maiores
          explicabo error fugit iste, repellat tenetur, tempore temporibus
          molestias, recusandae est accusantium nesciunt.
        </p>
      </div>
    </div>
    <div className="row row-content my-5 align-items-start">
      <div className="col-md-3 mx-auto overflow-hidden p-0 h-auto shadow w-auto">
        <a href="waterColorPaintings.html">
          <img
            src={require("../../shared/img/watercolor/1.jpg")}
            className="img-fluid rounded hover-transform-z opacity-hover"
            alt="watercolor"
          />
        </a>
      </div>
      <div className="ms-3 col-md">
        <h1 className="mt-3 mt-md-0 text-center text-md-start">Watercolor</h1>
        <p className="lead text-center text-md-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          corporis eveniet laborum minima repellendus necessitatibus inventore?
          Voluptates consequatur inventore ducimus. Inventore harum numquam
          architecto maiores blanditiis nam quod quos debitis?
        </p>
      </div>
    </div>
    <div className="row row-content my-5 align-items-start">
      <div className="col-md-3 mx-auto overflow-hidden p-0 h-auto shadow w-auto">
        <a href="soap.html">
          <img
            src={require("../../shared/img/soap/1.jpg")}
            className="img-fluid rounded hover-transform-z opacity-hover"
            alt="soap"
          />
        </a>
      </div>
      <div className="ms-3 col-md">
        <h1 className="mt-3 mt-md-0 text-center text-md-start">Soap Art</h1>
        <p className="lead text-center text-md-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          assumenda ullam voluptates odio sapiente distinctio laudantium
          officiis et. Quam amet dolorum aperiam architecto minus, rem magnam
          non quaerat corrupti quae.
        </p>
      </div>
    </div>
    <div className="row row-content my-5 align-items-start">
      <div className="col-md-3 mx-auto overflow-hidden p-0 h-auto shadow w-auto">
        <a href="pastel.html">
          <img
            src={require("../../shared/img/pastel/1.jpg")}
            className="img-fluid rounded hover-transform-z opacity-hover"
            alt="pastel"
          />
        </a>
      </div>
      <div className="ms-3 col-md">
        <h1 className="mt-3 mt-md-0 text-center text-md-start">Pastel</h1>
        <p className="lead text-center text-md-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          possimus expedita mollitia. Magni sunt earum repellendus placeat nisi
          inventore fugit temporibus quam itaque, quidem, eum necessitatibus,
          ratione velit pariatur eos.
        </p>
      </div>
    </div>
    <div className="row row-content my-5 align-items-start">
      <div className="col-md-3 mx-auto overflow-hidden p-0 h-auto shadow w-auto">
        <a href="acrylic.html">
          <img
            src={require("../../shared/img/acrylic/1.jpg")}
            className="img-fluid rounded hover-transform-z opacity-hover"
            alt="acrylic"
          />
        </a>
      </div>
      <div className="ms-3 col-md">
        <h1 className="mt-3 mt-md-0 text-center text-md-start">Acrylic</h1>
        <p className="lead text-center text-md-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          possimus expedita mollitia. Magni sunt earum repellendus placeat nisi
          inventore fugit temporibus quam itaque, quidem, eum necessitatibus,
          ratione velit pariatur eos.
        </p>
      </div>
    </div>
  </div>
);

export default memo(MainContainer);
