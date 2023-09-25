import react from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import About_me from './components/about_me/about_me';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <About_me/>

      <Projects/>

    </div>
  );
}

export default App;
