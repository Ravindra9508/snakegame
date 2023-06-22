import "./index.css";
import { React, useState } from "react";




function App() {
  const [xAxis, setxAxis] = useState(0)
  const [yAxis, setyAxis] = useState(0)
  function change1()
  {
    setyAxis(yAxis - 50)
  }
  function change2()
  {
    setxAxis(xAxis - 50)
  }
  function change3()
  {
    setxAxis(xAxis + 50)
  }
  function change4()
  {
    setyAxis(yAxis + 50)
  }

  return (

    <div className='main_container'>
      <button className='horizontal' onClick={change1 } disabled={yAxis === 0}>Up</button>
      <div className='container'>
        <button className='vertical' onClick={change2} disabled={xAxis === 0}> Left</button>
        <div className='main'>
          <div className='box' style={{ left: xAxis, top: yAxis }}></div>
          </div>
          <button className='vertical' onClick={change3 } disabled={xAxis === 450}>Right</button>
        </div>
        <button className='horizontal' onClick={change4 } disabled={yAxis === 450}>Bottom</button>
      </div>
  );
}

export default App;
