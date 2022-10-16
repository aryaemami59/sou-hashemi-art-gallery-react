import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "bootstrap-social";
import "bootstrap/dist/css/bootstrap.min.css";
import { FC, memo } from "react";
import "./App.css";
import Footer from "./features/components/index/Footer";
import Header from "./features/components/index/Header";
import MainContainer from "./features/components/index/MainContainer";
import Nav from "./features/components/index/Nav";

const App: FC = () => (
  <div>
    <Header />
    <Nav />
    <MainContainer />
    <Footer />
  </div>
);

export default memo(App);
