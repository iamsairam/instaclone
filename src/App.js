import React from 'react';
import './App.css'
import Images from './Images';
import NavBar from "./Nav";

function App(props) {
  return (
    <div className='App'>
      <NavBar />
      <hr />
      <React.StrictMode>
      <Images />
      </React.StrictMode>
    </div>
  );
}

export default App;