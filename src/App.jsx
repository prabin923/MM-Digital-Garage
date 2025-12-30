import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Scoreboard from './components/Scoreboard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Scoreboard />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
