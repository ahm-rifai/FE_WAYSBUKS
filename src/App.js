import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transactions from './Pages/Transaction';
import Addtopings from './Pages/Addtoping';
import Addproducts from './Pages/Addproduct';
import Myprofiles from './Pages/Myprofile';
import Mycarts from './Pages/Mycart';
import Home from './Pages/Home';
import Productdetails from './Pages/Productdetail';

function App(){
  return (
    <>
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Productdetails />} />
          <Route path="/cart" element={<Mycarts />} />
          <Route path="/profile" element={<Myprofiles />} />
          <Route path="/add-product" element={<Addproducts />} />
          <Route path="/add-toping" element={<Addtopings/>} />
          <Route path="/transaction" element={<Transactions/>} />
        </Routes>
      </Router>

    </>
  )
  };
    

export default App;