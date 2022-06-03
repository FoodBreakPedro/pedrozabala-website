import Header from "./components/header/header";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";



function WebContent() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
     <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
