import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reactDom from 'react-dom';
import {Timer} from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
}

export default App;
