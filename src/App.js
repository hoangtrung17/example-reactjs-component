import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Login with Facebook.
        </p>
        <Facebook/>
      </header>
    </div>
  );
}

export default App;
