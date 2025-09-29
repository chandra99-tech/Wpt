import React, { useState, useEffect } from "react";

function Counter() {

    //Assignment no 2
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  //Assignment no 1
  useEffect(() => {
    console.log(`Counter updated to: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>The value of Counter: {count}</h1>
      <div style={{ margin: "10px 0" }}>
        <button
          onClick={handleIncrement}
          style={{ marginRight: "10px", padding: "8px 16px" }}
        >
          Increment Counter
        </button>
      </div>
{/* //Assignment 3 */}
      <table
        border="1"
        // cellPadding="5"
        // cellSpacing="0"
        // style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Counter Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Counter;
