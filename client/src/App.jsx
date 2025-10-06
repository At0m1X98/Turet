import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Root from './root/Root';
import Home from './pages/Home';
import Wines from './pages/Wines';
import Alcoholics from './pages/Alcoholics';
import Degustation from './pages/Degustation';
import Place from './pages/Place';
import Companies from './pages/Companies';
import ToMorava from './pages/ToMorava';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Root />} >
            <Route index element={<Home />} />
            <Route path="wine" element={<Wines/>} />
            <Route path="alcoholics" element={<Alcoholics />} />
            <Route path="degustation" element={<Degustation />} />
            <Route path="place" element={<Place />} />
            <Route path="companies" element={<Companies />} />
            <Route path="to-morava" element={<ToMorava />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
