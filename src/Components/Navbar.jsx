import React from "react";
import logo from "../robot.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-red-500 custom-w rounded-b-full flex justify-center">
        <div className="flex space-x-96 items-center">
          <div className="">
            <img
              src={logo}
              alt=""
              className="w-9 h-9 left-3 rounded-full"
            />
          </div>
          <nav>
            <ul className="flex text-2xl cursor-pointer">
              <li>
                <Link to="/Home">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
