import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("yiii");
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onMouseOver={handleClick}>Incrementar</button>
    </div>
  );
}

export default App;
