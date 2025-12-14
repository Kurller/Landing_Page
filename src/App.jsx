import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import  Footer from "./components/Footer"

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
