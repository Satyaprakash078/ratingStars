import React, { useState, useEffect } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [rating,setRating] =useState(0);
  const [hover,setHover]=useState(0);
  
  const activeRating=Math.max(rating,hover);
  const handlerating=(id)=>{
     setRating(id+1);
  }
  const handlehover=(id)=>{
       setHover(id+1);
  }

  const handleLeavehover=()=>{
    setHover(0);
  }

  const handlereset=()=>{
    setRating(0);
    setHover(0);
  }
  return (
  <> 
  <div onMouseLeave={handleLeavehover}>
  <h1>Star Ratings</h1>
    {[...Array(5)].map((_,id)=>(
        <button key={id}
        id="starButton" 
        className={`${id < activeRating ? "colored": "uncolored"}`}
        onClick={()=>handlerating(id)}
        onMouseEnter={()=>handlehover(id)}>
        <FontAwesomeIcon icon={faStar} />
      </button>
    ))}
 </div>
  <button onClick={handlereset}>Reset Rating</button>
  

  
     
  </>
  )
};

export default App;
