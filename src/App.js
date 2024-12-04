'use strict'


import Header from './Components/Header';
import Footer from './Components/Footer';
import '../src/CSS/App1.css';
import ListProduct from './Components/ListProduct';
import SendDates from './Components/sendDates';
import TodoList from './Components/TodoList';
import UsersList from './Components/UsersList';
import Cart from './Components/Cart';  
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SiteName from './Components/SiteName';





function App() {

  const [cartItems, setCartItems] = useState([]); // для хранения товаров в корзине

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]) // добавление товара в корзину
  }

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i != index)) // удаление товара из корзины
  }

  return (
    <Router>
      <div className="App1">
        <SiteName />
        <nav>
          <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
            <li><Link to="/home">Главная</Link></li>
            <li><Link to="/todo">Список дел</Link></li>
            <li><Link to="/products">Товары и пользователи</Link></li>
            <li><Link to="/send">Обратная связь</Link></li>
            <li><Link to="/cart">Корзина</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/" element={<Header />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/products" element={          
            <div style={{display: "flex", gap: "20px", width: "100%"}}>
              <div className='containerInApp'>
                <UsersList />
              </div>
              <div style={{flex: 4, backgroundColor: "#ffffff", padding: "10px"}}>
                <ListProduct onAddToCart = {addToCart} />
              </div>  
            </div>} />
          <Route path="/send" element={<SendDates />} />
          <Route path="/cart" element={
            <Cart item = {cartItems} onRemove = {removeFromCart} />
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;



