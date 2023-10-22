import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import "./App.css";
import data from "./data";

console.log(data);
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {data.map((item) => (
        <section className="cards-list">
          <Cards
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
          />
        </section>
      ))}
    </div>
  );
}
export default App;
