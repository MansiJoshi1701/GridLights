import { useState } from 'react'
import './App.css'

function App() {

  const [active , setActive] = useState(false);
  const [order , setOrder] = useState([]);

  
  const grid = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const activateCell = (index) => {

    
    setOrder([...order,index]); //add the new index to the order
    //setActive(true);
  }

  return(
    <div className='wrapper'>
      <div
        className='grid'
        style={{ gridTemplateColumns: `repeat(${grid[0].length} , 1fr)` }}
      >
        {grid.flat(1).map((val,index) => {
          return val ? (
            <button
              key={index}
              onClick={() => activateCell(index)}
              className={order.includes(index) ? 'cell cell-activated' : 'cell'}
            /> 
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  )
  
}

export default App
