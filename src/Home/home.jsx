import React from "react";
import Nav from "./nav";
import Sidebar from "./sidebar";
import Main from "./main";
import Slideshow from "./slideshow";
import News from "./news";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="w-full">
      <Nav />
      <Sidebar />
      <Slideshow />
      <Main />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
