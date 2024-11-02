import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <h1>Hello, Hackathon Team!</h1>
        <p>Welcome to our React App!</p>
        <p>
          This is a paragraph. There is an image below this text.<br/>
          <img src="photo_of_spacecraft_.jpeg" alt="A photo of a certain spacecraft" id="photo-resize" />
        </p>
        {/* Define Routes */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
