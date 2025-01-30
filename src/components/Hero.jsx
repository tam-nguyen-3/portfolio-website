const baseUrl = import.meta.env.BASE_URL || "";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <article className="flex flex-col items-center md:flex-row md:items-center md:gap-8">
      <figure className="mb-4 h-60 w-56 overflow-hidden rounded-full md:w-2/5">
        <img src={`${baseUrl}assets/avatar.png`} alt="Avatar" className="h-full w-full object-cover" />
      </figure>

      <section className="flex flex-col items-center gap-4 md:w-3/5 md:items-start md:justify-center">
        <h1 className="text-gray-800 text-4xl font-medium">
          Hello, I&rsquo;m <span className="bg-med-theme-purple">Tam</span>!
        </h1>
        <p className="text-gray-600 text-center md:text-left">
          I want to build powerful products that tackle real-world problems.
          <br />
          Currently a CS sophomore at{" "}
          <a
            href="https://www.minerva.edu/"
            className="italic underline transition duration-300 ease-in-out hover:text-theme-purple"
          >
            {" "}
            Minerva University
          </a>
          , CA.
          <br />
          Talk to me about fullstack development, machine learning, and
          philosophy!
        </p>
        <div className="mb-6 flex items-center gap-6">
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
          <button className="rounded-3xl border-2 bg-med-theme-purple px-8 py-1.5 transition duration-300 hover:bg-theme-purple">
            Resume
          </button>
        </div>
      </section>
    </article>
  );
};

export default Hero;
