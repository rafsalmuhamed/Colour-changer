
import './App.css'

import { useState } from 'react';
function App() {
  
  const [bgColor, setBgColor] = useState();
   const changeColor =()=>{
      // let purple = '#A020F0';
      setBgColor('orange');
    }
    const changeColor1 =()=>{
      // let purple = '#A020F0';
      setBgColor('red');
    
    }
    const changeColor2 =()=>{
      // let purple = '#A020F0';
      setBgColor('green');
    
    }
    const changeColor3 =()=>{
      // let purple = '#A020F0';
      setBgColor('blue');
    
    }
    
  
  return (
    <>
  
     <div className='container'>
      
     
        <div className="buttons" style={{background: bgColor}}>
          
          <button className='btn btn4' onClick={changeColor}></button>
          <button className='btn btn1' onClick={changeColor1}></button>
          <button className='btn btn2' onClick={changeColor2}></button>
          <button className='btn btn3' onClick={changeColor3}></button>
        </div>
     </div>
    </>
  );
}

export default App;
