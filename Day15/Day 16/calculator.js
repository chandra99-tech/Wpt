import React, { useState, useEffect } from 'react';

function Calculator() {

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

 
  const [results, setResults] = useState({});


  useEffect(() => {
    setResults({
      add: num1 + num2,
      subtract: num1 - num2,
      multiply: num1 * num2,
      divide: num2 !== 0 ? (num1 / num2).toFixed(2) : 'Infinity'
    });
  }, [num1, num2]);

  return (
    <div className="fact" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Calculator</h2>

      
      <label>
        Number 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </label>
      <br /><br />


      <label>
        Number 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </label>
      <br /><br />

      {/* Display results */}
      <p>Addition: {results.add}</p>
      <p>Subtraction: {results.subtract}</p>
      <p>Multiplication: {results.multiply}</p>
      <p>Division: {results.divide}</p>
    </div>
  );
}

export default Calculator;
