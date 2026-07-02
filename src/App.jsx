import { useEffect, useState } from 'react';
// import { db } from './firebase'; // Import the db we exported earlier
import { collection, getDocs } from 'firebase/firestore'; 
import './App.css';
import Hello from "./Hello"
function App() {


  return (
    <>
      <Hello/>
    </>
  );
}

export default App;