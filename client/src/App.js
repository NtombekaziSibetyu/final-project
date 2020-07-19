import React, { Switch } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Register from './components/Patients/register/Register';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
          <Route exact path= '/home' component={Home} />
          <Route exact path= '/register' component={Register} />

       </Switch>
       <Footer/>
    </div>
  )
}

export default App;
