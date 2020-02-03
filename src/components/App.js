import React, { useContext, useEffect } from 'react';
import ClueNumbers from './ClueNumbers';
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
    generateClueOne();
  }, [])

  return (
    <div>
      <header></header>
      <main>
        <ClueNumbers />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;