import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from "./containers/Home";

function App() {
  return (
    <div className="SiteWrapper">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
