import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import About from './Pages/About';
import Privacy from './Pages/Privacy';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './Pages/Book';
import Movie from './Pages/Movie'
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        
          <Routes>
            {/* Home Route / Index Route */}
            <Route path="/" exact element={<Home/>} />
            {/* Book */}
            <Route path="/books/:id" exact element={<Book/>}/>
            {/* Book */}
            <Route path="/movies/:id" exact element={<Movie/>}/>
            {/* About */}
            <Route path="/about" exact element={<About/>} />
            {/* Privacy Policy */}
            <Route path="/privacy" exact element={<Privacy/>} />
            {/* Contact */}
            <Route path="/contact" exact element={<Contact/>} />

          
          </Routes>
          {/* Footer */}
      </div>
      <div className="buffer"></div>

        <Footer />
    </Router>
  );
}

export default App;
