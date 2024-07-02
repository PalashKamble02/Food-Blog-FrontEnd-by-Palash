import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const MobileNav = ({ menuItems, Logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3BottomRight className="w-7 h-7" />
      </button>

      <div
        className={`transition-all w-full fixed bg-primary z-50 top-0 ${hideLeft} flex flex-col justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-8">
          <RiCloseCircleLine className="w-7 h-7" />
        </button>
        {/* Menu Items */}
        <ul className="flex flex-col items-center mt-16 gap-5">
          {menuItems.map((menu, index) => (
            <li key={index} className="py-2">
              <Link to={menu} onClick={onClose} className="font-medium capitalize text-secondary">
                {menu}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4 font-medium mt-10">
          <li>
            <button className="text-secondary px-4 py-2 rounded border">Log In</button>
          </li>
          <li>
            <button className="text-secondary px-4 py-2 rounded border">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
