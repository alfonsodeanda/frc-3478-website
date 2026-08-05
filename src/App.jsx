import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEF1FB]">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Sponsors />
      <Footer />
    </div>
  );
}