import { useState } from 'react'
import './App.css'

function App() {

  const [order , setOrder] = useState([]);

  
  const grid = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const activateCell = (index) => {

    const newOrder = [...order,index];
    setOrder(newOrder); //add the new index to the order
    

    //if last cell reached then initiate de-activation logic
    if(newOrder.length === grid.flat(1).filter(Boolean).length){
      deactivateCells();
    }
  }


  const deactivateCells = () => {

    const timer = setInterval(() => {
      
      setOrder((origOrder) => {
        
        //Method 1 - Making a copy of original order and altering the copy
        const newOrder = [...origOrder];
        newOrder.pop();

        if(newOrder.length === 0){
            clearInterval(timer);
          }

          
          return newOrder;
        })



        //Method 2 - altering the original 'order' state. This won't work because of below reason
      // order.pop(); ==>> You can't directly alter the state, it can only be updated via setter function

      //   if(order.length === 0){
      //     console.log("no more deactivating")
      //     clearInterval(timer);
      //   }

      //   console.log(order)
      //   return order;
      // })
      

    },500)

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
              aria-label={`Cell ${index}`}
              onClick={() => activateCell(index)}
              disabled={order.includes(index)}
              className={order.includes(index) ? 'cell cell-activated' : 'cell'}
            /> 
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  )
  
}

export default App
