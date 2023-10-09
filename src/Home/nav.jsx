import React from "react";
import logo from "../res/logoPartner.jpg";
import { FaAmazon } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import insta from "../res/instagram.png";
import xLogo from "../res/twitter.png";
import linkedln from "../res/linkedln.png";
import { ImSearch } from "react-icons/im";
const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between w-11/12 mx-auto py-5">
        <div className="w-1/3">
          <a href="#" className="">
            <img src={logo} alt="" className="w-11/12" />
          </a>
        </div>
        <ul className="flex justify-evenly items-center border w-2/3 text-blue-950 font-medium">
          <li>
            <a href="#" className="hover:underline">
              Client access
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="hover:underline">
              Contacts
            </a>
          </li>
          <div className="flex gap-5 items-center justify-between ">
            <a href="#" className="">
              <img src={insta} alt="" className="w-6 " />
            </a>
            <a href="#" className="">
              <img src={xLogo} alt="" className="w-6 " />
            </a>
            <a href="#" className="">
              <img src={linkedln} alt="" className="w-6 " />
            </a>
          </div>
          <li>
            <a href="#" className="hover:underline">
              Subscribe
            </a>
          </li>
          <div htmlFor="" className="flex items-center border border-black">
            <input type="search" className="focus:outline-none py-1 px-2" />
            <a href="#">
              <ImSearch className="rotate-90 mx-2" />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
