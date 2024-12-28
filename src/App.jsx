import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <Navbar />
      <h1>Homepage</h1>
      <Hero />
    </>
  )
}

export default App

// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <CustomLink to="/pricing">Pricing</CustomLink>
//         <CustomLink to="/about">About</CustomLink>
//       </ul>
//     </nav>
//   )
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }

{/* <main className='flex w-screen px-60 pb-80 flex-col items-center gap-9'>
<nav className='flex w-full h-16 justify-between items-center'>
  <section className='text-2xl'>
    <a href="">Tam</a>
  </section>
  <section className='flex items-center gap-16'>
    <a href="">About</a>
    <a href="">Projects</a>
  </section>
</nav>


<p>Hellu</p>
</main> */}