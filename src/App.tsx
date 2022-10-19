import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social";
import { FC, memo } from "react";
import "./App.css";
import HomePage from "./features/components/home/HomePage";
import Footer from "./features/shared/Footer";
import Header from "./features/shared/Header";
import Nav from "./features/shared/Nav";

const App: FC = () => (
  <div>
    <Header />
    <Nav />
    <HomePage />
    <Footer />
  </div>
);

export default memo(App);
