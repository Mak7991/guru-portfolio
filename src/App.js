import React,{ useEffect } from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Using AOS for animation

// Components
import GlobalStyle from './globalstyles';
import Home from './components/home';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import FloatingButtons from './components/FloatingButtons';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>

        <FloatingButtons />
        <GlobalStyle/>
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;