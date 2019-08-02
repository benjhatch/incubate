import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './Nav';
import Home from './pages/home/Home';
import PostCreate from './pages/postcreate/PostCreate';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path='/post' component={PostCreate} />
      </Router>
    </div>
  );
}

export default App;
