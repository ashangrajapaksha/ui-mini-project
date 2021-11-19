import React, { useEffect, useContext, useState } from "react";


const OperatorControls = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="operator-style">
        <div className="d-flex justify-content-center header-text">
            <h2>RUNNING</h2>
        </div>
        <div className="d-flex justify-content-center">
            <h1 className="operator-text">OPERATOR CONTROLS</h1>
        </div>
      <div className="d-flex justify-content-center ">
        <div className="card card-style-01">
          <div className="d-flex justify-content-center ">
            <h1 className="togle-text">Toggle 01</h1>
          </div>
          <div className="d-flex justify-content-center btn-style">
             
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setCount(count + 1)}
            >
              Click me
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center btn-style">
        <div className="card card-style-02">
          <div className="d-flex justify-content-center">
            <p className="togle-text">Togle <br/>count</p>
            
            
          </div>
          <div className="d-flex justify-content-center">
            <h2 className="togle-text">{count}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export { OperatorControls };
