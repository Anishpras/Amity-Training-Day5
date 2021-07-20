import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const intervalReference = useRef();
  useEffect(() => {
    intervalReference.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalReference.current);
    };
  });
  return (
    <div className="App">
      <h1>Timer - {timer}</h1>
      <button onClick={() => clearInterval(intervalReference.current)}>
        Clear interval
      </button>
    </div>
  );
}

export default App;
