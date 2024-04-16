import { useState } from "react";
import "./Counter.css";

// props
function Counter() {
  // useState
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
    </div>
  );
}

export default Counter;
