import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/">Tam</Link>
      </section>
      <section>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </section>
    </nav>
  )
}

export default Navbar


{/* <nav className='flex w-full h-16 justify-between items-center'>
<section className='text-2xl'>
  <Link to='/'>Tam</Link>
</section>
<section className='flex items-center gap-16'>
  <Link to='/about'>About</Link>
  <Link to='/projects'>Projects</Link>
</section>
</nav> */}