import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Homepage';
import About from './components/Homepage/About';
import Contact from './components/Contact/index';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='projects' element={<Projects />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;