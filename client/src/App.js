import React, { Switch } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Register from './components/Patients/register/Register';
import Login from './components/Patients/login/Login'
import PatientState from './context/patient/PatientState';
import BookingState from './context/booking/BookingState';
import './App.css';

const App = () => {
  return (
    <PatientState>
      <BookingState>
        <Router>
        <div className='App center'>
          <Navbar/>
          HELLO
          <Footer/>
        </div> 
        </Router>
      </BookingState>
    </PatientState>
      
  )
}

 export default App;
