import React from 'react';
import './App.css';
import Board from './board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Matching Game</h1>
      </header>
      <div className="App-content">
        <Board />
      </div>
    </div>
  );
}

export default App;