import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Register from './containers/Register';
import Homepg from './containers/Homepg';
import food from './category/food';
import education from './category/education';
import movie from './category/movie';
import health from './category/health';
import travel from './category/travel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/signin' Component={Signin}/>
          <Route path='/register' Component={Register}/>
          <Route path='/homepg' Component={Homepg}/>
          <Route path='/food' Component={food}/>
          <Route path='/movie' Component={movie}/>
          <Route path='/travel' Component={travel}/>
          <Route path='/health' Component={health}/>
          <Route path='/education' Component={education}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
