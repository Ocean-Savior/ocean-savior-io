import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Partners from "./components/Partners/Partners";
import Plans from "./components/Plans/Plans";
import Presale from "./components/Presale/Presale";
import Problem from "./components/Problem/Problem";
import Tokenomics from "./components/Tokenomics/Tokenomics";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Problem />
      <Plans />
      <Partners />
      <Tokenomics />
      <Presale />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
