import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Porfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/Social/SocialLinks";

function App() {
  return (
    <div className="selection:bg-violet-500 selection:text-black text-white">
      <Navbar></Navbar>
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks></SocialLinks>
      <Footer/>
    </div>
  );
}

export default App;