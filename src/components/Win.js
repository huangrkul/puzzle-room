import React, { useEffect, useContext } from 'react';
import { setAni } from '../js/snippets.js';
import { store } from './store.js';

const Win = () => {

  const globalState = useContext(store);
  const { dispatch } = globalState;
  let finalCode;
  
  const generateStringCode = (code) => {
    let stringCode;
    for(let i=0; i < code.length; i++) {
      if(i === 0) {
        stringCode = code[i].toString();
      } else {
        stringCode += code[i].toString();
      }
    }
    return stringCode;
  }

  const generateFinalCode = () => {
    let firstCode = generateStringCode(globalState.state.clueOneCode);
    let secondCode = generateStringCode(globalState.state.memoryCode);
    finalCode = `${firstCode}${secondCode}`;
    dispatch({type: 'finalCode', payload: finalCode});
  }

  const initSequence = () => {
    if(globalState.state.initWin) {
      setAni('.did-you-know',0,'dis-none');
      setAni('.memory-container',0,'dis-none');
      setAni('.clue-numbers',0,'dis-none');
      setAni('.numbers-input-container',0,'dis-none');
      setAni('.win-svg polygon:nth-of-type(1)',0,'win-polygon-animate');
      setAni('.win-svg polygon:nth-of-type(2)',300,'win-polygon-animate');
      setAni('.win-svg polygon:nth-of-type(3)',600,'win-polygon-animate');
      setAni('.win-svg text:nth-of-type(1)',1600,'win-text-animate');
      setAni('.win-svg line:nth-of-type(2)',1800,'win-line-animate');
      setAni('.win-svg line:nth-of-type(1)',1800,'win-line-animate');
      setAni('.win-svg .win-total',2300,'win-total-enter');
    }
  }

  useEffect(() => {
    initSequence();
    generateFinalCode();
  },[globalState.state.initWin, globalState.state.clueOneCode, globalState.state.memoryCode])

  return (
    <section className="win">
      <svg className="win-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579 173">
        <polygon className="" points="149.53 0.5 50.23 0.5 0.58 86.5 50.23 172.5 149.53 172.5 199.19 86.5 149.53 0.5"/>
        <polygon className="" points="143.48 11.5 56.88 11.5 13.58 86.5 56.88 161.5 143.48 161.5 186.78 86.5 143.48 11.5"/>
        <polygon className="" points="136.88 21.97 62.68 21.97 25.58 86.24 62.68 150.5 136.88 150.5 173.99 86.24 136.88 21.97"/>
        <line className="" x1="192.35" y1="74.66" x2="578.99" y2="74.66"/>
        <line className="" x1="192.35" y1="98.34" x2="578.99" y2="98.34"/>
        <text className="win-text">You Won!</text>
        <text className="win-total">Thank you for sacrificing {globalState.state.finalCode} brain cells!</text>
      </svg>
    </section>
  );
}

export default Win;