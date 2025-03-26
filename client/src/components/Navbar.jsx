import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-slate-300 shadow-lg fixed mb-24 top-0 z-40">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center justify-center h-full">
            <h3 className="text-2xl font-bold">Bond442 Downloads</h3>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center h-full space-x-4">
            <Link to="youtube">
              <li
                title="Download Youtube Video"
                className="text-base text-black font-bold hover:text-gray-600 cursor-pointer duration-300"
              >
                Youtube
              </li>
            </Link>
            <Link to="/tiktok">
              <li
                title="Download Tiktok Video"
                className="text-base text-black font-bold hover:text-gray-600 cursor-pointer duration-300"
              >
                Tiktok
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
