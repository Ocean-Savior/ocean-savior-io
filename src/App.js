import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Problem from "./components/Problem/Problem";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Problem />
      <Footer />
    </div>
  );
}

export default App;
