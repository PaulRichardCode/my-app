import React from "react";
import man from "../res/chairman.jpg";
import qas from "../res/Questions.jpg";

const News = () => {
  return (
    <div className="w-11/12 mx-auto py-2">
      <h1 className="text-blue-800 opacity-80 font-medium md:text-4xl py-5 text-left">
        What we do
      </h1>
      <div>
        <div className="w-1/2">
          <img src={man} alt="" />
        </div>
        <div className="w-1/2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            numquam repellendus corporis modi autem aliquam sapiente voluptatem
            fugiat eligendi nam? Ab, rem ipsa tempora in laboriosam neque
            reprehenderit maiores et.
          </p>
          <img src={qas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default News;
