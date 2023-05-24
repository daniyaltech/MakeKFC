import React from 'react'
import { useState } from 'react'
function Counter() {
    let [counter,setCounter]=useState(0);

const increment=()=>{
    setCounter(counter+1)
}
const decrement=()=>{
    if(counter<=0){
        setCounter(counter=0)
    }
    else{

        setCounter(counter-1)
    }
}

  return (
    <>
    <div className="d-flex gap-3 align-items-start w-25">
    <button className="btn btn-primary" onClick={increment}>+</button>
    <p>{counter}</p>
    <button className="btn btn-primary" onClick={decrement}>-</button>
    </div>
    </>
  )
}

export default Counter