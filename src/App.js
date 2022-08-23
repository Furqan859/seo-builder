import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Footer from './component/Footer';
import {BrowserRouter } from  'react-router-dom';


function App() {
  return (
    <React.Fragment>
    <Header/>
     <NavBar/>
     
 
   <Footer/>
    </React.Fragment>
    
  );
}

export default App;
