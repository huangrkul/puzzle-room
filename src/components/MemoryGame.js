import React, { useEffect, useContext } from 'react';
import { store } from './store.js';
import { setAni } from '../js/snippets.js';

const MemoryGame = () => {

  const globalState = useContext(store);
  let intTimer;
  const plates = document.querySelectorAll('.plate');
  const sequence = globalState.state.memoryCode;
  let userCorrect = 0;
  let isIgnored = false;
  let wrongs = 1;

  const initSequence = () => {
    if(globalState.state.initMemory) {
      isIgnored = true;
      console.log(sequence);
      setAni('.memory-container',0,'vis-none','remove');
      setAni('.memory-svg polyline:first-of-type',0,'memory-polyline-animate');
      setAni('.memory-svg polyline:nth-of-type(2)',150,'memory-polyline-animate');
      setAni('.memory-svg polyline:nth-of-type(3)',300,'memory-polyline-animate');
      setAni('.memory-svg polyline:nth-of-type(4)',300,'memory-polyline-animate-infinite');
      setAni('.memory-svg polyline:nth-of-type(5)',300,'memory-polyline-animate-infinite');
      setAni('.memory-svg polyline:nth-of-type(6)',300,'memory-polyline-animate-infinite');
      setAni('.memory-svg polygon:first-of-type',1800,'memory-polygon-animate');
      setAni('.memory-svg polygon:first-of-type',2200,'#222','fill');
      intTimer = setTimeout(() => {
        plateSequence();
      }, 2200)
    }
  }
  
  const plateSequence = () => {
    clearTimeout(intTimer);
    let num = 0;
    intTimer = setInterval(() => {
      if(num < sequence.length) {
        plates[sequence[num]].classList.add('memory-polygon-animate');
        num++;
      } else {
        clearInterval(intTimer);
        isIgnored = false;
      }
    },500)
  }

  const handlePlate = event => {
    if(event.target.id === sequence[userCorrect].toString() && !isIgnored) {
      let fillColor;
      switch(event.target.id) {
        case '0': case '3': case '6':
          fillColor = '#573a37';
          break;
        case '1': case '4': case '7':
          fillColor = '#375757';
          break;
        case '2': case '5': case '8':
          fillColor = '#222';
          break;
      }
      event.target.style.fill = fillColor;
      if(userCorrect < 8) {
        userCorrect++;
      } else {
        isIgnored = true;
      }
      
    } else if(event.target.id !== sequence[userCorrect].toString() && !isIgnored) {
      if(wrongs < 4) {
        document.querySelector(`.memory-svg polyline:nth-of-type(${wrongs})`).style.opacity = 0;
      }
      wrongs++;
    }
  }

  useEffect(() => {
    initSequence();
  }, [globalState.state.initMemory])

  return (
    <section className="memory-container vis-none">
      <svg className="memory-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 236">
        <polyline className="" points="39.99 0 39.99 44.5 383.99 44.5 383.99 110"/>
        <polyline className="" points="49.99 0 49.99 33.5 393.99 33.5 393.99 110"/>
        <polyline className="" points="61.99 0 61.99 22.5 405.99 22.5 405.99 110"/>
        <polyline className="" points="39.99 0 39.99 44.5 383.99 44.5 383.99 110"/>
        <polyline className="" points="49.99 0 49.99 33.5 393.99 33.5 393.99 110"/>
        <polyline className="" points="61.99 0 61.99 22.5 405.99 22.5 405.99 110"/>
        <polygon className="" points="409.94 110.5 377.03 110.5 360.58 139 377.03 167.5 409.94 167.5 426.39 139 409.94 110.5"/>
        <polygon id="0" onClick={handlePlate} className="plate" points="409.94 178.5 377.03 178.5 360.58 207 377.03 235.5 409.94 235.5 426.39 207 409.94 178.5"/>
        <polygon id="1" onClick={handlePlate} className="plate" points="349.94 144.5 317.03 144.5 300.58 173 317.03 201.5 349.94 201.5 366.39 173 349.94 144.5"/>
        <polygon id="2" onClick={handlePlate} className="plate" points="289.94 110.5 257.03 110.5 240.58 139 257.03 167.5 289.94 167.5 306.39 139 289.94 110.5"/>
        <polygon id="3" onClick={handlePlate} className="plate" points="289.94 178.5 257.03 178.5 240.58 207 257.03 235.5 289.94 235.5 306.39 207 289.94 178.5"/>
        <polygon id="4" onClick={handlePlate} className="plate" points="229.94 144.5 197.03 144.5 180.58 173 197.03 201.5 229.94 201.5 246.4 173 229.94 144.5"/>
        <polygon id="5" onClick={handlePlate} className="plate" points="169.94 110.5 137.03 110.5 120.58 139 137.03 167.5 169.94 167.5 186.4 139 169.94 110.5"/>
        <polygon id="6" onClick={handlePlate} className="plate" points="169.94 178.5 137.03 178.5 120.58 207 137.03 235.5 169.94 235.5 186.4 207 169.94 178.5"/>
        <polygon id="7" onClick={handlePlate} className="plate" points="109.94 144.5 77.03 144.5 60.58 173 77.03 201.5 109.94 201.5 126.39 173 109.94 144.5"/>
        <polygon id="8" onClick={handlePlate} className="plate" points="49.94 178.5 17.03 178.5 0.58 207 17.03 235.5 49.94 235.5 66.39 207 49.94 178.5"/>
      </svg>

    </section>
  );
}

export default MemoryGame;