import React, { useState } from "react";

const Sidebar = () => {
  const [view, setView] = useState(false);

  function toggleClick() {
    setView(!view);
  }

  return (
    <div>
      <nav id="nav2" className="">
        <ul className="flex justify-around relative w-full h-auto text-base py-4 tracking-wider font-medium text-blue-950 uppercase">
          <li>
            {" "}
            <a href="#" onMouseLeave={toggleClick}>
              About
            </a>
            <p
              className={`text-sm absolute z-40 bg-red-500 ${
                view ? "block" : "hidden"
              }`}>
              <h5>Overview</h5>
              <h5>Our Team</h5>
              <h5>Diversty</h5>
              <h5>Our offices</h5>
              <h5>Our Code of Coduct</h5>
              <h5>History</h5>
            </p>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Capital and Funding</a>
          </li>
          <li>
            <a href="#">News & Views</a>
          </li>
          <li>
            <a href="#">ShareHolders</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
