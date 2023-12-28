import { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Pages/Home';
import Blogs from './Pages/Blog';
import './App.css';
import { Contact } from './Pages/Contact';




function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path="/"  element={<LoginForm />} />
          <Route path='/home' element={<Home />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact />} />
         
      </Routes>
    </>
  );
}

export default App;
