import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
// import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
// import CategoryDescription from './CategoryDescription';

import Footer from './Footer';

import Error from './Error';

const navHome = {
  home: '/',
  about: '/about',
  category: '/cat',
};
const navCat = {
  notebook: 'notebook',
  monitor: 'monitor',
  cellphone: 'cellphone',
};

function App() {
  return (
    <>
      {/* <Header nav={navHome} /> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={navHome.home}>Главная</Link>
            </li>
            <li>
              <Link to={navHome.about}>О сайте</Link>
            </li>
            <li>
              <Link to={navHome.category}>Категории</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category nav={navCat} />} />

          <Route path="/cat/:catName" element={<Category nav={navCat} />} />
          <Route path="/cat/:catName" element={<Category nav={navCat} />} />
          <Route path="/cat/:catName" element={<Category nav={navCat} />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
