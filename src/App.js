import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Table from './components/Table';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/error';

function App() {
  return (

    <><BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route> 
        <Route path="/" element={<Navbar/>}></Route> 
        <Route path="/*" element={<Error/>}></Route>


      </Routes>
    </BrowserRouter><div>
        {/* <Navbar />
    <Portfolio />
    <Table />
    <Aboutus />
    <Login />
    <Signup />*/}
      </div></>
  );
}

export default App;

