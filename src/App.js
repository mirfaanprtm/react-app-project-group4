import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Section2 from "./pages/Section2.0";
import "bootstrap/dist/css/bootstrap.min.css";
import Section3 from "./pages/Section3.1";
import Cards from "./pages/Cards";
import Slider from "./pages/Slider";
import Section33 from "./pages/Section3.3";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section2 />
      <Section3 />
      <Cards />
      <Slider />
      <Section33/>
    </>
  );
}

export default App;
