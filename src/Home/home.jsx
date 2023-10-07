import React from "react";
import Nav from "./nav";
import Sidebar from "./sidebar";
import Main from "./main";
import Slideshow from "./slideshow";

const Home = () => {
  return (
    <div className="w-full">
      <Nav />
      <Sidebar />
      <Slideshow />
      <Main />
    </div>
  );
};

export default Home;
