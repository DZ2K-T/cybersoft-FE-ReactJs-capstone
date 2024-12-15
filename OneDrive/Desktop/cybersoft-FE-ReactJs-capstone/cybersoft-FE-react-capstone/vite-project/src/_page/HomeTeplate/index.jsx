import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Carousel from "./Carousel";
import Footer from "./components/Footer";
import TestImage from "./test";
import ListMovie from "./listMovie";
import Blog from "./Blog"
import Contact from "./contact"
export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Carousel />
      <ListMovie />
      <Blog />
      <Contact />
      <Outlet />
      <Footer />
      
    </div>
  );
}
