import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import About from './Pages/About';
import Privacy from './Pages/Privacy';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className='wrapper'>
      <Header />
      
        <Routes>
          {/* Home Route / Index Route */}
          <Route path="/" exact element={<Home/>} />
         {/* About */}
          <Route path="/about" exact element={<About/>} />
          {/* Privacy Policy */}
          <Route path="/privacy" exact element={<Privacy/>} />
        </Routes>
        {/* Footer */}
        <Footer />
    </div>
    </Router>
  );
}

export default App;
