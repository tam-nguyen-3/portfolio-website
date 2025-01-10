import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white pt-8">
      {/* Logo */}
      <Link
        to="/"
        className="group relative overflow-hidden text-2xl font-medium transition-all duration-300 ease-in-out"
      >
        <span className="relative z-10">Tam</span>
        <span className="absolute inset-0 origin-left scale-x-0 transform bg-med-theme-purple transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
      </Link>

      {/* Hamburger Menu */}
      <button
        className="text-gray-800 text-2xl transition-transform duration-300 ease-in-out md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute left-0 top-16 w-full flex-col items-center gap-4 bg-white py-4 shadow-md transition-all duration-300 ease-in-out md:static md:flex md:w-auto md:flex-row md:gap-16 md:shadow-none`}
      >
        <li>
          <Link
            to="/about"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="bg-gradient-to-r from-theme-purple to-theme-purple bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="bg-gradient-to-r from-theme-purple to-theme-purple bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              Projects
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
