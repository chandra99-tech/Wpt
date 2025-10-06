import React, { useState, useEffect } from "react";

function Factorial() {
  
  const [number, setNumber] = useState(null);

  
  const [result, setResult] = useState(null);

  useEffect(() => {
    let fact = 1;

    for (let i = 1; i <= number; i++) {
      fact *= i;
    }

    setResult(fact);
  }, [number]);
  return (
    <div className="fact" style={{ padding: "20px", fontFamily: "Times New Roman" }}>
      <h2>Factorial Calculator</h2>

      <label>
        Enter a number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          min="0"
        />
      </label>

      <h3>
        Factorial of {number} is: {result}
      </h3>
    </div>
  );
}

export default Factorial;
