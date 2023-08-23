import React, { useState } from 'react';
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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // return (
  //   <BrowserRouter>
  //     {isLoggedIn && (
  //       <>
  //         <Topbar />
  //         <div className="container">
  //           <Sidebar />
  //         </div>
  //       </>
  //     )}
  //     <Routes>
  //       <Route index element={<Login handleLogin={handleLogin} />} />
  //       <Route path="/signup" element={<Signup />} />
  //       {isLoggedIn && (
  //         <>
  //           <Route path="/home" element={<Home />} />
  //           <Route path="/userList" element={<UserList />} />
  //           <Route path="/user/:userId" element={<User />} />
  //             <Route path="/newUser" element={<NewUser />} />
  //             <Route path="/products" element={<ProductList />} />
  //             <Route path="/product/:productId" element={<Product />} />
  //             <Route path="/newproduct" element={<NewProduct />} />
  //         </>
  //       )}
  //     </Routes>
  //   </BrowserRouter>
  // );


  return (
    <BrowserRouter>
      {isLoggedIn && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
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

/*
import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home/Home';
import UserList from './pages/home/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 

import './app.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    
    <BrowserRouter>
    <Login />
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userList' element={<UserList />} /> 
          <Route path='/user/:userId' element={<User />} /> 
          <Route path='/newUser' element={<NewUser />} /> 
          <Route path='/products' element={<ProductList />} /> 
          <Route path='/product/:productId' element={<Product />} /> 
          <Route path='/newproduct' element={<NewProduct />} /> 

        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;


*/

