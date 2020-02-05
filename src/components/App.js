import React, { useContext, useEffect } from 'react';
import DidYouKnow from './DidYouKnow';
import NumbersClue from './NumbersClue';
import NumbersInput from './NumbersInput';
import MemoryGame from './MemoryGame';
import Win from './Win';
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
      <header className="dis-none"><h1>SVG Puzzle - William Huang</h1></header>
      <main>
        <DidYouKnow />
        <NumbersClue />
        <NumbersInput />
        <MemoryGame />
        <Win />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;