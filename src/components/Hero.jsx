import avatar from '../assets/avatar.png'
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Hero = () => {
  return (
    <article>
      <figure>
        <img src={avatar} alt="Avatar" />
      </figure>

      <section>
        <h1>Hello, I&apos;m Tam!</h1>
        <p>
          I&apos;m a software engineer. I&apos;m also a sophomore at Minerva University (CA, US).
          I specialize in full-stack applications development using modern technologies.
          I&apos;m passionate about ML/AI, and I love to discuss ethics and ethical digital practices.
          Let&apos;s connect!
        </p>

        {/* call to action/ social buttons */}
        <div>
          <a href="https://github.com/tam-nguyen-3/" target='_blank'> <FaGithub /> </a>
          <a href="https://www.linkedin.com/in/tam-nguyen-m/" target='_blank'> <FaLinkedin /> </a>
          <button>
            Button
          </button>
        </div>

      </section>
    </article>
  )
}

export default Hero