import React, { Switch } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Register from './components/Patients/register/Register';
import PatientState from './context/patient/PatientState';
import BookingState from './context/booking/BookingState'
import './App.css';

const App = () => {
  return (
    <PatientState>
      <BookingState>
      <div className="App">
      <Navbar/>
       <Switch>
          <Route exact path= '/home' component={Home} />
          <Route exact path= '/register' component={Register} />

       </Switch>
       <Footer/>
    </div>
      </BookingState>
    </PatientState>
    
  )
}

export default App;
