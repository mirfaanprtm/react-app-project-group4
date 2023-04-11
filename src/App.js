import About from "./pages/About";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import Section2 from "./pages/Section2.0";
import "bootstrap/dist/css/bootstrap.min.css";
import Section3 from "./pages/Section3.1";
import Cards from "./pages/Cards";
import Slider from "./pages/Slider";
import Section33 from "./pages/Section3.3";

import SectionCard from "./pages/Section3.4Card";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section2 />
      <Section3 />
      <Cards />
      <Slider />
      <About/>
      <SectionCard />
      <Footer />
    </>
  );
}

export default App;
