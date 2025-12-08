import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-white w-70 h-40 shadow rounded-2xl flex   ">
      <h1>Count: {count}</h1>
      <button
        className="bg-amber-200 w-20 h-10 border border-amber-950 "
        onClick={increase}
      >
        Increase
      </button>

      <button
        className="bg-amber-200 w-20 h-10 border border-amber-950"
        onClick={decrease}
      >
        Descreas
      </button>
    </div>
  );
};

export default Counter;
