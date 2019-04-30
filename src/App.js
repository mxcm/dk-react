import React from 'react';
import logo from './img/logo.svg';
import okinawa from './img/okinawa.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={okinawa} className="our-photo" />
        <p>
          <code>Hello, world.</code> 你好，世界。
        </p>
        <p>
          Love you, Charlotte!
        </p>
      </header>
    </div>
  );
}

export default App;
