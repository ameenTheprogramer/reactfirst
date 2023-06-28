import React,{ useState, useEffect } from 'react'

function Counter() {
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)

  useEffect(()=>{
    console.log("mounting.........");
    console.log("updating........." + count);
    console.log("updating........." + count2);
   
   
  },[count, count2]);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <h1>somthg blah blah {count} </h1>

      <button onClick={()=>setCount2(count2+1)}>increment</button>
      <h1>somthg blah blah {count2} </h1>
    </div>
  )
}

export default Counter
