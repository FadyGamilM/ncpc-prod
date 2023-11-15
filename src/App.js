import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home';
import ElHammam from './components/ElHammam';
import Naguib from './pages/Naguib';

function App() {
  return (
    <BrowserRouter>
      <main className='w-full'>
        <div className='bg-slate-200'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/naguib' element={<Naguib />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
