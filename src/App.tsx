import Features from "./components/sections/Features";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}

export default App;
