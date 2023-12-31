import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route path='/products/:category' element={<Products />}/>
        </Route>
        <Route path='/products/:category/:product' element={<ProductDetail />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>      

      <Footer />
    </div>
  );
}

export default App;
