import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Porfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/Social/SocialLinks";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About />
      <Portfolio />
      <Skills />
      <Contact/>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
