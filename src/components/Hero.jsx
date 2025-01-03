import avatar from "../assets/avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <article className="flex flex-col items-center md:flex-row md:items-center md:gap-8">
      <figure className="w-56 h-56 rounded-full overflow-hidden mb-4 md:w-2/5">
        <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
      </figure>

      <section className="flex flex-col items-center md:justify-center md:items-start md:w-3/5 gap-4">
        <h1 className="text-4xl font-medium text-gray-800">
          Hello, I&rsquo;m <span className="bg-med-theme-purple">Tam</span>!
        </h1>
        <p className="text-center text-gray-600 md:text-left">
          I want to build powerful products that tackle real-world problems. 
          <br />
          Currently a CS sophomore at <a href="https://www.minerva.edu/" className="italic transition duration-300 ease-in-out hover:text-theme-purple underline"> Minerva University</a>, CA. 
          <br />
          Talk to me about fullstack development, machine learning, and philosophy!
        </p>
        <div className="flex gap-6 mb-6 items-center">
          <a
            href="https://github.com/tam-nguyen-3/"
            target="_blank"
            className="text-gray-600 hover:text-theme-purple"
          >
            <FaGithub size={32} className="transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/tam-nguyen-m/"
            target="_blank"
            className="text-gray-600 hover:text-theme-purple"
          >
            <FaLinkedin size={32} className="transition duration-300" />
          </a>
          <button className="px-8 py-1.5 bg-med-theme-purple rounded-3xl hover:bg-theme-purple border-2 transition duration-300">
            Resume
          </button>
        </div>
      </section>
    </article>
  );
};

export default Hero;
