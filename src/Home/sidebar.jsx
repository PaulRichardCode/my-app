import React, { useState } from "react";

const Sidebar = () => {
  const [cook, setCook] = useState(true);

  function myClick() {
    setCook(false);
  }
  return (
    <div>
      <nav id="nav2" className="">
        <ul className="flex justify-around w-full text-base py-4 tracking-wider font-medium text-blue-950 uppercase">
          <li>
            {" "}
            <a href="#">About</a>
            <div className=""></div>
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
