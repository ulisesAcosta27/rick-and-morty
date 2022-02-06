import React, { useEffect, useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0)
  const [stopCounter, setStopCounter] = useState(true)
  useEffect(() => {
    if(counter > 4){
      alert('No se puede sumar mas')
      setStopCounter(false)
    }
  }, [counter])
  return (
    <div>
      <div className="counterContainer">
        <button onClick={ () => setCounter(counter + 1) }>+1</button>
        {  stopCounter ? <p>{ counter }</p> : <p>5</p>  }
      </div>
    </div>
  )
};

