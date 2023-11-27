import React, { useState } from 'react';
import './Style.css';
const Calculator = () => {
  
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleResult = () => {
    setInput((prevInput) => eval(prevInput).toString());
  };
  

  return (
    <div className='main'>
        <div className='textf'>
            <input type="text" className="h2" value={input} readOnly />
      </div>
      <div class="inpbtn" id="display" value="display">
             <span><button class="btn-first-row " onClick={handleClear}>AC</button></span>
             <span><button class="btn-first-row" id="plus" value="+/-">+/-</button></span>
             <span><button class="btn-first-row" onClick={() => handleClick('%')}>%</button></span>
             <span><button class="btn-first-row yellow" onClick={() => handleClick('/')}>/</button></span>
      </div>
      <div class="inpbtn" id="display" value="display">
            <span> <button class="btn-first-row" onClick={() => handleClick('1')}>1</button></span>
             <span><button class="btn-first-row" onClick={() => handleClick('2')}>2</button></span>
             <span><button class="btn-first-row" onClick={() => handleClick('3')}>3</button></span>
             <span><button class="btn-first-row yellow" onClick={() => handleClick('*')}>*</button></span>
        </div>
        <div class="inpbtn" id="display" value="display">
            <span><button class="btn-first-row" onClick={() => handleClick('4')}>4</button></span>
            <span><button class="btn-first-row"onClick={() => handleClick('5')}>5</button></span>
            <span><button class="btn-first-row" onClick={() => handleClick('6')}>6</button></span>
            <span><button class="btn-first-row yellow" onClick={() => handleClick('-')}>-</button></span>
        </div>
        <div class="inpbtn" id="display" value="display">
            <span><button class="btn-first-row" onClick={() => handleClick('7')}>7</button></span>
            <span><button class="btn-first-row" onClick={() => handleClick('8')}>8</button></span>
            <span><button class="btn-first-row" onClick={() => handleClick('9')}>9</button></span>
            <span><button class="btn-first-row yellow" onClick={() => handleClick('+')}>+</button></span>
        </div>
        <div class="inpbtn" id="display" value="display">
                <span><button class="btn-first-row" onClick={() => handleClick('0')}>0</button></span>
                <span><button class="btn-first-row" onClick={() => handleClick('.')}>.</button></span>
                <span><button class="btn-first-row colsp" onClick={handleResult}>=</button></span>
        </div>
    </div>
  );
};

export default Calculator;
