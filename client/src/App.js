import React, { Fragment, useContext  } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Register from './components/Patients/register/Register';
import Login from './components/Patients/login/Login';
import Patient from './components/Patients/Patient';
import BookingForm from './components/appointment/BookingForm';
import PatientState from './context/patient/PatientState';
import BookingState from './context/booking/BookingState';
import SettingToken from './context/SettingToken'
import './App.css';
import Footer from './components/layout/Footer';

if(localStorage.token) {
  SettingToken(localStorage.token);
}
const App = () => {
  
  return (
    <PatientState>
      <BookingState>
        <Router>
        <Fragment>
        <Navbar/>
        <div className='App center'>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/patient' component={Patient}/>
              <Route exact path='/book' component={BookingForm}/>
          </Switch>
        </div> 
        </Fragment>
        </Router>
      </BookingState>
    </PatientState>
      
  )
}

export default App;
