import React from "react";
import man from "../res/chairman.jpg";
import qas from "../res/Questions.jpg";
import { GrDocumentPdf } from "react-icons/gr";

const News = () => {
  return (
    <div className="w-11/12 mx-auto py-2 text-blue-950">
      <h1 className="text-blue-800 opacity-80 font-medium md:text-4xl py-5 text-left">
        News Highlights
      </h1>
      <div className="w-full flex gap-20 justify-around">
        <div className="basis-1/2">
          <img src={man} alt="" />
          <figcaption className="text-left uppercase py-2">Panel</figcaption>
          <h1 className="text-2xl text-left font-medium">
            Partners Group Chairman Steffen Meister at IPEM, Paris
          </h1>
          <p className="text-left font-light">
            Steffen Meister, the Executive Chairman of our Board, was a keynote
            speaker at IPEM in Paris. In his speech, Steffen explained that
            private markets have become the new traditional asset class and
            outlined his key predictions for the industry's future. This
            includes how the democratization of private markets is leading to
            new entrants, which could change the investor landscape; why
            transformational investing can build resilience during the biggest
            economic recalibration ever; and what the increased scale of private
            markets means for allocation strategies.
          </p>
          <p className="text-left text-lg py-5">
            <a href="#" className="hover:underline text-black font-medium ">
              Watch the video here
            </a>
          </p>
          <div className="my-5" id="news">
            <h3 className="text-left uppercase py-2">CORPORATE NEWS</h3>
            <h1 className="text-2xl text-left font-medium">
              Partners Group reports revenue growth of 19% supported by solid
              performance fee development
            </h1>
            <p className="text-left text-lg py-3">
              <a href="#" className="hover:underline text-black font-medium ">
                Read press release
              </a>
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="my-5" id="news">
            <h3 className="text-left uppercase py-2">INVESTMENT NEWS</h3>
            <h1 className="text-2xl text-left font-medium">
              Partners Group to invest in Exus, an international renewables
              asset management and development firm
            </h1>
            <p className="text-left text-lg py-3">
              <a href="#" className="hover:underline text-black font-medium ">
                Read press release
              </a>
            </p>
          </div>
          <img src={qas} alt="" />
          <figcaption className="text-left uppercase py-2">
            Q&A WITH MIKE BRYANT, HEAD OF PRIVATE REAL ESTATE
          </figcaption>
          <h1 className="text-2xl text-left font-medium">
            Beyond the core: how value-add strategies are taking center stage in
            real estate
          </h1>
          <p className="text-left font-light">
            In this Q&A, Mike Bryant, Head of Private Real Estate at Partners
            Group, explains how investors are turning their attention to the
            ‘value-add’ segment of real estate. Through value-add strategies, we
            have the capacity to transform assets with a hands-on approach to
            meet evolving ESG requirements as well as the preferences of tenants
            in the corporate and consumer segments
          </p>
          <p className="text-left text-lg py-3">
            <GrDocumentPdf />
            <a
              href="#"
              className="hover:underline text-black font-medium text-2xl">
              Download PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
