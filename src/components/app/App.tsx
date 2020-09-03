import React from 'react';
import './App.css';
import { Header } from '../header/Header';
import { Offices } from '../offices/Offices';

function App() {
  return (
    <div className="App">
      <Header />
      <Offices />
    </div>
  );
}

export default App;
