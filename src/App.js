import React from 'react';
import './App.css';
import MyFullCalendar from './components/fullCalendar/fullCalendar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(faBell,faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <MyFullCalendar/>
    </div>
  );
}

export default App;
