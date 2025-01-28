// App.jsx
import React from 'react';
import './App.css';
import DigitalClock from "./assets/components/clock/clock";
import CatBackground from './assets/components/catBackground/catBackground';

function App() {
  return (
    <main>
      <div className="clock-rim">
        <div className='clock-inner'>
        <CatBackground />
        <DigitalClock />
        </div>
      </div>
    </main>
  );
}

export default App;
