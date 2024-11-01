import './UseState.css'

import { useState } from 'react';

const UseState = () => {

  // console.log(useState('light'));

  const [theme, setTheme] = useState('light');

  const [count, setCount] = useState(0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => {
        return setTheme('dark');
      }}>Dark</button>
      <button onClick={() => {
        return setTheme('light');
      }}>Light</button>
      <h2>{ count }</h2>
      <button onClick={() => {
        return setCount((prevCount) => prevCount + 1);
      }}>
        Increment
      </button>
      <button onClick={() => {
        return setCount((prevCount) => prevCount - 1);
      }}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
