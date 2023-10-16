import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards
        img="/assets/hiking.png"
        star="assets/star.png"
        score="5.0"
        reviewCount={6}
        country="USA"
        title="Hiking Safety with Javier Ross"
        price={136}
      />
      <Cards
        img="/assets/hiking.png"
        star="assets/star.png"
        score="5.0"
        reviewNum="6"
        country="USA"
        desc="Hiking Safety with Javier Ross"
        price={136}
      />
    </div>
  );
}

export default App;
