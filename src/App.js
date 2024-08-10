import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Porfolio/Portfolio";
import SocialLinks from "./components/Social/SocialLinks";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About/>
      <Portfolio/>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
