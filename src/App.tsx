import React from 'react';
import tarkov_sweat from './images/tarkov_sweat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Hi Jon!
        </h1>
        <img src={tarkov_sweat} alt="TarkovSweat" />
      </div>
    </div>
  );
}

export default App;
