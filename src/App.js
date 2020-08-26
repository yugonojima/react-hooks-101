import React, { useEffect, useState } from "react";

const App = (props) => {
  // const initialStates = {
  //   name: "",
  //   price: 1000,
  // };
  const [state, setState] = useState(props);
  const { name, price } = state;

  // レンダリング(マウント時とアップデート時)がされた後に実行される
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate");
  });
  // マウント時のみ実行される
  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);
  // nameが変更される時だけ実行される
  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
