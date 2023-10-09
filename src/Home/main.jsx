import React from "react";
import { FaArrowRight, FaSearchengin } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { BsFillTriangleFill, BsCurrencyExchange } from "react-icons/bs";
import { MdSolarPower, MdRealEstateAgent } from "react-icons/md";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-blue-700 opacity-70 font-medium md:text-4xl py-5 text-left">
        What we do
      </h1>
      <p className="font-medium text-xl text-left py-5">
        Partners Group is a leading global private markets firm. Since 1996, we
        have invested over USD 200 billion in private equity, private debt,
        private real estate, and private infrastructure on behalf of our clients
        globally. We seek to generate strong returns through capitalizing on
        thematic growth trends and transforming attractive businesses and assets
        into market leaders. We are a committed, responsible investor and aim to
        create sustainable returns with lasting, positive impact for all our
        stakeholders.
      </p>
      <div className="flex justify-between py-5 w-11/12 mx-auto">
        <div className="flex-col w-1/6 ">
          <GiGears className="text-8xl text-blue-700 opacity-75 mx-auto" />
          <h2 className="text-2xl text-blue-950 py-2 w-24 leading-6 mx-auto my-2">
            Private equity
          </h2>
          <button className="font-semibold w-9/12 bg-blue-950 hover:bg-cyan-600 rounded-tl-lg rounded-br-lg transition duration-200 px-2 py-1 text-white flex justify-between items-center gap-1 mx-auto">
            Find out more <BsFillTriangleFill className="rotate-90 text-xs " />
          </button>
        </div>
        <div className="flex-col w-1/6 ">
          <MdSolarPower className="text-8xl text-blue-700 opacity-75 mx-auto" />
          <h2 className="text-2xl text-center text-blue-950 py-2 leading-6 mx-auto my-2">
            Private Infrastructure
          </h2>
          <button className="font-semibold w-9/12 bg-blue-950 hover:bg-cyan-600 rounded-tl-lg rounded-br-lg transition duration-200 px-2 py-1 text-white flex justify-between items-center gap-1 mx-auto">
            Find out more <BsFillTriangleFill className="rotate-90 text-xs " />
          </button>
        </div>
        <div className="flex-col w-1/6 ">
          <MdRealEstateAgent className="text-8xl text-blue-700 opacity-75 mx-auto" />
          <h2 className="text-2xl text-center w-28 text-blue-950 py-2 leading-6 mx-auto my-2">
            Private real estate
          </h2>
          <button className="font-semibold w-9/12 bg-blue-950 hover:bg-cyan-600 rounded-tl-lg rounded-br-lg transition duration-200 px-2 py-1 text-white flex justify-between items-center gap-1 mx-auto">
            Find out more <BsFillTriangleFill className="rotate-90 text-xs " />
          </button>
        </div>
        <div className="flex-col w-1/6 ">
          <BsCurrencyExchange className="text-8xl text-blue-700 opacity-75 mx-auto" />
          <h2 className="text-2xl text-center w-28 text-blue-950 py-2 leading-6 mx-auto my-2">
            Private debt
          </h2>
          <button className="font-semibold w-9/12 bg-blue-950 hover:bg-cyan-600 rounded-tl-lg rounded-br-lg transition duration-200 px-2 py-1 text-white flex justify-between items-center gap-1 mx-auto">
            Find out more <BsFillTriangleFill className="rotate-90 text-xs " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
