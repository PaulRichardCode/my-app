import React from "react";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-blue-700 font-medium md:text-4xl py-5 text-left">
        What we do
      </h1>
      <p className="font-medium text-xl text-left py-10">
        Partners Group is a leading global private markets firm. Since 1996, we
        have invested over USD 200 billion in private equity, private debt,
        private real estate, and private infrastructure on behalf of our clients
        globally. We seek to generate strong returns through capitalizing on
        thematic growth trends and transforming attractive businesses and assets
        into market leaders. We are a committed, responsible investor and aim to
        create sustainable returns with lasting, positive impact for all our
        stakeholders.
      </p>
      <div className="flex py-5 w-5/6 mx-auto">
        <div className="flex-col w-1/6 bg-yellow-200">
          <img src="" alt="" />
          <h2 className="text-2xl text-blue-950 py-2">
            Private <br /> equity
          </h2>
          <button className="font-bold bg-blue-950 px-2 py-1 text-white">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
