import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Aboute from './components/Aboute';
import BookNowe from './components/BookNowe';
import Abouttadobae from './components/Abouttadobae'
import "animate.css/animate.min.css";

function App() {
  return (
    <main>
      {/* <Navbarr/> */}
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/aboutus' element = {<Aboute/>} />
        <Route path = '/abouttadoba' element = {<Abouttadobae/>} />
        <Route path = '/booknow' element = {<BookNowe/>} />
      </Routes>
    </main>
  );
}

export default App;
