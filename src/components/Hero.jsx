import avatar from "../assets/avatar.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Hero = () => {
  return (
    <article className="flex flex-col items-center md:flex-row md:items-center md:gap-8">
      <figure className="w-64 h-64 rounded-full overflow-hidden mb-4 md:w-2/5">
        <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
      </figure>

      <section className="flex flex-col items-center md:justify-center md:items-start md:w-3/5 gap-4">
        <h1 className="text-2xl font-medium text-gray-800">Hello, I’m Tam!</h1>
        <p className="text-center text-gray-600 md:text-left">
          I am a sophomore at Minerva. Passionate about full-stack development,
          ML, and ethical digital practices.
        </p>
        <div className="flex gap-6 mb-6 items-center">
          <a
            href="https://github.com/tam-nguyen-3/"
            target="_blank"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/tam-nguyen-m/"
            target="_blank"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaLinkedin size={32} />
          </a>
          <button className="px-8 py-1.5 bg-gray-800 text-white rounded-3xl hover:bg-gray-700">
          Resume
          </button> 
        </div>
        
      </section>
    
    </article>
  )
}

export default Hero;

// import avatar from '../assets/avatar.png'
// import { FaGithub, FaLinkedin } from "react-icons/fa"

// const Hero = () => {
//   return (
//     <article>
//       <figure>
//         <img src={avatar} alt="Avatar" />
//       </figure>

//       <section>
//         <h1>Hello, I&apos;m Tam!</h1>
//         <p>
//           I&apos;m a software engineer. I&apos;m also a sophomore at Minerva University (CA, US).
//           I specialize in full-stack applications development using modern technologies.
//           I&apos;m passionate about ML/AI, and I love to discuss ethics and ethical digital practices.
//           Let&apos;s connect!
//         </p>

//         {/* call to action/ social buttons, may make a component */}
//         <div>
//           <a href="https://github.com/tam-nguyen-3/" target='_blank'> <FaGithub /> </a>
//           <a href="https://www.linkedin.com/in/tam-nguyen-m/" target='_blank'> <FaLinkedin /> </a>
//           <button>
//             Button
//           </button>
//         </div>

//       </section>
//     </article>
//   )
// }

// export default Hero