import React from 'react';
import './App.css';
import {Header} from './Header'
import {Technologies} from './Technologies'


const SomeLearn = ["HTML", "CSS", "JS", "React"]



function App() {
  return (
    <div className="App">
      <Header />
      <Technologies learn = {SomeLearn}/>
    </div>
  );
}

export default App;
