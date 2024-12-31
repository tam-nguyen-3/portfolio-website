import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-2 bg-white border-b">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        Tam
      </Link>

      {/* Hamburger Menu */}
      <button
        className="text-gray-800 text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center py-4 gap-4 absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:flex md:static md:flex-row md:gap-8 md:w-auto`}
      >
        <li>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
        </li>
      </ul>
    </nav>


  );
};

export default Navbar;