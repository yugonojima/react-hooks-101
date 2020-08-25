import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };
  const countReset = () => setCount(0);
  const countDouble = () => setCount(count * 2);
  const countDividendThree = () =>
    setCount(() => {
      if (count % 3 === 0) {
        const num = count / 3;
        return num;
      } else {
        return count;
      }
    });

  return (
    <>
      <div>count:{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <div>
        <button onClick={countReset}>reset</button>
        <button onClick={countDouble}>x2</button>
        <button onClick={countDividendThree}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
