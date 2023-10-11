import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className='bg-slate-200'>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
