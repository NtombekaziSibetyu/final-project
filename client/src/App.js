import React, {Switch} from 'react';
import Navbar from './components/layout/Navbar';
import Register from './components/Patients/Register'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
       
      <Register/>
     

    </div>
  );
}

export default App;
