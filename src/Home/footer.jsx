import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">About us</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Businesses</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Sustainability</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Investors</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Capital & Funding</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
