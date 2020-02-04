import React, { useEffect, useContext } from 'react';
import { store } from './store.js';
import { setAni } from '../js/snippets.js';

const NumbersInput = () => {

  const globalState = useContext(store);
  const { dispatch } = globalState;
  const state = globalState.state;
  let timer;

  const checkCode = () => {
    const check = `${state.inputNum1}${state.inputNum2}${state.inputNum3}${state.inputNum4}`;
    const answer = `${state.clueOneCode[0]}${state.clueOneCode[1]}${state.clueOneCode[2]}${state.clueOneCode[3]}`;
    if(check === answer){
      clearTimeout(timer);
      document.querySelector('.numbers-input-container ul').style.color = '#ddd';
      dispatch({type: 'initMemory', payload: true});
    }
  }

  const nextNum = event => {

    let target = event.target;
    let numType;
    let current;

    switch(event.target.id){
      case 'num1':
        numType = 'inputNum1';
        current = state.inputNum1;
        break;
      case 'num2':
        numType = 'inputNum2';
        current = state.inputNum2;
        break;
      case 'num3':
        numType = 'inputNum3';
        current = state.inputNum3;
        break;
      case 'num4':
        numType = 'inputNum4';
        current = state.inputNum4;
        break;
    }
    let next = current === 4 ? 0 : current + 1;

    if(target.classList.contains('input-number-enter')){
      target.classList.remove('input-number-enter');
    }
    target.classList.add('input-number-exit');
    timer = setTimeout(() => {
      clearTimeout(timer);
      dispatch({type: numType, payload: next});
      target.classList.add('input-number-enter');
      target.classList.remove('input-number-exit');
    }, 150);

  }

  useEffect(() => {
    checkCode();
    return(() => {
      clearTimeout(timer);
    })
  },[state.inputNum1, state.inputNum2, state.inputNum3, state.inputNum4])

  return (
    <section className={`numbers-input-container ${globalState.state.renderCode ? '' : 'numbers-input-hide'}`}>
      <ul>
        <li></li>
        <li id="num1" onClick={nextNum}>{globalState.state.inputNum1}</li>
        <li id="num2" onClick={nextNum}>{globalState.state.inputNum2}</li>
        <li id="num3" onClick={nextNum}>{globalState.state.inputNum3}</li>
        <li id="num4" onClick={nextNum}>{globalState.state.inputNum4}</li>
      </ul>
    </section>
  );
}

export default NumbersInput;