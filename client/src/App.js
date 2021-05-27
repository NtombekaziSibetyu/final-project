import React, { Fragment } from 'react';
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
import './App.css';
import Footer from './components/layout/Footer';


const App = () => {
  
  return (
    <PatientState>
      <BookingState>
        <Router>
        <Fragment>
        <Navbar/>
        <div className='app'>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route  path='/login' component={Login}/>
              <Route  path='/register' component={Register}/>
              <Route  path='/patient' component={Patient}/>
              <Route  path='/book' component={BookingForm}/>
          </Switch>
        </div> 
        <Footer/>
        </Fragment>
        </Router>
      </BookingState>
    </PatientState>
      
  )
}

export default App;
