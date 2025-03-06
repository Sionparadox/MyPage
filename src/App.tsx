import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CSStudy from './pages/CSStudy';
import Projects from './pages/Projects';
import CodingTests from './pages/CodingTests';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />
      <main className='flex-1 py-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cs-study' element={<CSStudy />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/coding-tests' element={<CodingTests />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
