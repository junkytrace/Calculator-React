import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [result, setResult] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [resultBefore, setResultBefore] = useState("");

  //   const handleClick = (e) => {
  //     setResultValue(resultValue.concat(e.target.name));
  //   };
  const handleClick = (e) => {
    setResultBefore(resultBefore.concat(e.target.name));
    setResultValue(
      resultValue.concat(e.target.name).replace(".", ",").replace("*", "x")
    );
  };
  const clear = () => {
    setResultValue("");
    setResult("");
    setResultBefore("");
  };
  const calculate = () => {
    try {
      setResult(eval(resultBefore));
    } catch {
      setResult("Error");
    }
  };
  const sqrtCalc = () => {
    setResult(Math.sqrt(resultValue));
  };
  const percentCalc = () => {
    setResult(result / 100);
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={resultValue} id="resval" />
        </form>
        <form>
          <input type="text" value={result} />
        </form>
        <hr />
        <div className="keypad">
          <button onClick={clear} id="clear">
            C
          </button>
          <button name="√" onClick={sqrtCalc}>
            √
          </button>
          <button name="%" onClick={percentCalc}>
            %
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="00" onClick={handleClick}>
            00
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            ,
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
