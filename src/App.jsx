import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slideshow from "./components/Slideshow";
import projects from "./data/projects";
import experiences from "./data/experiences";
import BasicTimeline from "./components/Timeline";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="flex w-screen flex-col gap-6 px-8 md:px-16 lg:px-32 xl:px-60">
      <Navbar />
      <Hero />
      <Slideshow name="Highlighted Projects" items={projects} />
      <BasicTimeline name="My Experiences" items={experiences} />
      <Footer />
    </main>
  );
};

export default App;
