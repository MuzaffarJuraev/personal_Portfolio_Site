import "./App.css";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <About />
      <AboutMe />
    </div>
  );
}

export default App;
