import React from 'react';
import Home from './Containers/Home'
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";
import Order from './Containers/Order';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/order/:lat/:lon" component={Order} />
      </div>
    </BrowserRouter>
  );
}

export default App;
