import "./App.css";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <About />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
