import { useState } from 'react'
import './App.css'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import useCounter from './customHooks/useCounter'

function App () {
  // const [count,setCount] =useState(0)

  //  function Increment(){
  //   setCount(count+1)
  //  }
  //  function Decrement(){
  //   setCount(count-1)
  //  }
  // const [count,Increment,Decrement] =useCounter();
  return (
    <div className='App'>
      {/* <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button> */}
      <Counter1 />
      <Counter2/>
    </div>
  )
}

export default App
