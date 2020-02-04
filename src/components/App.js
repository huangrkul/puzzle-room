import React, { useContext, useEffect } from 'react';
import DidYouKnow from './DidYouKnow';
import NumbersClue from './NumbersClue';
import NumbersInput from './NumbersInput';
import GuessCups from './GuessCups';
import { store } from './store.js';

const App = () => {

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const generateClueOne = () => {
    let clueOne = [];
    for(let i=0; i<4; i++) {
      let randNum = Math.floor(Math.random() * 10);
      clueOne.push(randNum);
    }
    console.log(clueOne);
    dispatch({type: 'clueOne', payload: clueOne });
  }

  useEffect(() => {
  }, [globalState.state.renderCode])

  useEffect(() => {
    generateClueOne();
  }, [])

  return (
    <div>
      <header></header>
      <main>
        <DidYouKnow />
        <NumbersClue />
        <NumbersInput />
        <GuessCups />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;