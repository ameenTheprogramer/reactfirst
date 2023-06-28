import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [state,setstate]=useState(false)
  return (
    <div>
      <h1 onClick={()=>setstate(!state)}>show/hide</h1>
        {state ? <Counter/>: null}
    </div>
  );
}

export default App;
