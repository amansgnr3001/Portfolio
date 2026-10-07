import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import FeaturedWork from './components/FeaturedWork';
import Engineering from './components/Engineering';
import Experience from './components/Experience';
import Github from './components/Github';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <FeaturedWork />
        <Engineering />
        <Experience />
        <Github />
        <Contact />
      </main>
    </>
  );
}

export default App;
