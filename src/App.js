import './App.css';
import ProductDetails from './pages/product-details';
import HomePage from './pages/home';
import About from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './pages/favourites'
import Account from './pages/profile-page'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop commingFromShop={'i am shop'}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
