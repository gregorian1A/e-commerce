import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import ProductScreen from './components/ProductScreen';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';

const App = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Router>
      <Navbar click={() => setToggler(true)}  show={toggler} />
      <Backdrop show={toggler} click={() => setToggler(false)} />
      <Sidedrawer show={toggler} click={() => setToggler(false)}
      />
      <main>
       
      <Route path='/' exact component={HomeScreen} />
      <Route path='/product/:id' exact component={ProductScreen} />
      <Route path='/cart' exact component={CartScreen} />
    
      </main>
   </Router>
  );
}

export default App;
