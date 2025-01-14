import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <NavBar />
        <Home />
      </div>

      <About />

      <div className="p-5 md:px-[15%]">
        <Experience />
        <Projects />
      </div>

      <Footer/>
    </div>
  )
}