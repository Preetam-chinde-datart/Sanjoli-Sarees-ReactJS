import './App.css';
import ProductDetails from './pages/product-details';
import HomePage from './pages/home';
// import About from './pages/about';
import Shop from './pages/shop';
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './pages/favourites'
import Account from './pages/account'
import Bag from './pages/bag'
import OrderHistory from './pages/Order-History'
import OrderHistoryDetails from './pages/OrderHistoryDetails'
import CheckOut from './pages/checkout1'
// import { useReducer, useState } from 'react';
import Logout from './pages/logout';
// import PrivacyPolicy from './pages/Privacypolicy'
// import ReturnAndReturn from './pages/Legalpolicy'
// import TermsAndConditions from './pages/Statuspolicy'


function App() {
  
  // for checkout or payment 
  // const [getFinalPrice, setGetFinalPrice] = useState(null)

  

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/account' element={<Account />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/order-history' element={<OrderHistory />} />
        <Route path='/order-history-details' element={<OrderHistoryDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/logout' element={<Logout />} />


        {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-and-return' element={<ReturnAndReturn />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} /> */}
        

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
