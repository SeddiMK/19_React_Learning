import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Footer from './Footer';

import Error from './Error';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
