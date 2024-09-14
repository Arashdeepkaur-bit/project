import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(9);
  const multiples=()=>{
    setcount(count+9);
  }
  
  return (
    <div className="App">
      <h1>Table of nine:{count}</h1>
      <button onClick ={multiples}>multiples of 9</button>
    
    </div>
  );
}

export default App;

