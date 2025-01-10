import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        {/* Left Section */}
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="text-sm">© 2025 Tam Nguyen. All rights reserved.</p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/tam-nguyen-3/"
            target="_blank"
            className="text-gray-600 hover:text-theme-purple"
          >
            <FaGithub size={24} className="transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/tam-nguyen-m/"
            target="_blank"
            className="text-gray-600 hover:text-theme-purple"
          >
            <FaLinkedin size={24} className="transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
