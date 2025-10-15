import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    setResult(Number(num1) - Number(num2));
  };

  return (
    <>
      <form>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
      </form>

      <h2>Result: {result}</h2>
    </>
  );
}

export default App;
