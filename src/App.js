import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheDate from './state/TheDate.js'
import Counter from './state/Counter.js'

function App() {
  return (
    <div>
      <TheDate />
      <Counter count={123} step={2}/>
    </div>
  );
}

export default App;
