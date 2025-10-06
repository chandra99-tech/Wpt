import React, { useState, useEffect } from 'react';

function SmartCalculator() {

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  useEffect(() => {
    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num2 !== 0 ? (num1 / num2).toFixed(2) : 'Infinity');
        break;
      default:
        setResult('Invalid operation');
    }
  }, [num1, num2, operation]);

  return (
    <div className="fact" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Smart Calculator</h2>

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

      
      <label>
        Operation:
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
      </label>
      <br /><br />

      <h3>{operation.toUpperCase()} Result: {result}</h3>
    </div>
  );
}

export default SmartCalculator;
