import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center pt-8 bg-white">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-medium relative overflow-hidden group transition-all duration-300 ease-in-out"
      >
        <span className="relative z-10">Tam</span>
        <span className="absolute inset-0 bg-med-theme-purple transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
      </Link>

      {/* Hamburger Menu */}
      <button
        className="text-gray-800 text-2xl md:hidden transition-transform duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center py-4 gap-4 absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:flex md:static md:flex-row md:gap-16 md:w-auto transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link to="/about" className="group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r from-theme-purple to-theme-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r from-theme-purple to-theme-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Projects</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
