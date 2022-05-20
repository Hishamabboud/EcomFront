import * as React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from './Pages/Login';
import './App.css';
import Nav from './Components/Nav';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Products from './Components/Products';
import Product from './Components/Product';


function App() {
  return (
      <div className = "App">
    <BrowserRouter>
        <Nav/>
        <main className = "form-signin"/>
        <Routes>
            <Route path = "/" element= {<Home />} />
            <Route path = "/products" element={<Products/> }/>
            <Route path = '/login' element={<Login />} />
            <Route path = '/register' element={<Register />} />

        </Routes>
        <main/>
    </BrowserRouter>
    </div>
  );
}

export default App;
