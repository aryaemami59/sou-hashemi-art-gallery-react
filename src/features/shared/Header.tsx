import { FC, memo } from "react";

const Header: FC = () => (
  <header className="jumbotron jumbotron-fluid">
    <div className="container">
      <div className="row">
        <div className="col-4 col-sm-3 col-md-2 align-self-center">
          <img
            src={require("./img/logos/SH1.png")}
            alt="logo"
            className="logo"
          />
        </div>
      </div>
    </div>
  </header>
);

export default memo(Header);
