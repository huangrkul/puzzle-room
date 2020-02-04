import React, { useContext, useEffect } from 'react';
import DidYouKnow from './DidYouKnow';
import NumbersClue from './NumbersClue';
import NumbersInput from './NumbersInput';
import MemoryGame from './MemoryGame';
import { store } from './store.js';

const App = () => {

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const generateClueOne = () => {
    let clueOne = [];
    for(let i=0; i<4; i++) {
      let randNum = Math.floor(Math.random() * 5);
      clueOne.push(randNum);
    }
    console.log(clueOne);
    dispatch({type: 'clueOne', payload: clueOne });
  }

  const generateMemoryCode = () => {
    let code = [0,1,2,3,4,5,6,7,8];
    code.sort((a, b) => {
      return 0.5 - Math.random();
    })
    dispatch({type: 'memoryCode', payload: code});
  }

  useEffect(() => {
    generateClueOne();
    generateMemoryCode();
  }, [])

  return (
    <div>
      <header></header>
      <main>
        <DidYouKnow />
        <NumbersClue />
        <NumbersInput />
        <MemoryGame />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;