import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home/Home';
import UserList from './pages/home/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import './app.css';
import Login from './Login';
import Signup from './Signup';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage for login status
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Store login status in localStorage
    localStorage.setItem('isLoggedIn', 'true');
  };
  
  const handleLogout = () => {
    
    setIsLoggedIn(false);
    // Clear login status from localStorage
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };


  return (
    <BrowserRouter>
      {isLoggedIn && (
        <>
          <Topbar/>
          <div className="container">
            <Sidebar handleLogout={handleLogout}  />
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/userList" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      )}
      <Routes>
         <Route index element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );



}

export default App;

