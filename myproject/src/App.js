import React,{useState} from 'react';
import './App.css';

function App() {
  const[multiple,setmultiple]=useState(9);
  const multiples=()=>{
    setcount(multiple+9);
  }
  
  return (
    <div className="App">
      <h1>Table of nine:{multiple}</h1>
      <button onClick ={multiples}>Multiples</button>
    
    </div>
  );
}

export default App;

