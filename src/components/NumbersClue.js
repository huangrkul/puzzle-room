import React, { useEffect, useContext } from 'react';
import { store } from './store.js';

const NumbersClue = () => {

  const globalState = useContext(store);

  useEffect(() => {
  })

  return (
    <section>
      <svg className="clue-numbers-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301 301">
        <path className="clue-numbers-outline" d="M222.11,25l72.12,125L222.11,275H77.89L5.77,150,77.89,25H222.11M225,20H75L0,150,75,280H225l75-130L225,20Z"/>
        <text className="title-font num pos1">{globalState.state.clueOneCode[0]}</text>
        <text className="title-font num pos2">{globalState.state.clueOneCode[1]}</text>
        <text className="title-font num pos3">{globalState.state.clueOneCode[2]}</text>
        <text className="title-font num pos4">{globalState.state.clueOneCode[3]}</text>
      </svg>
    </section>
  );
}

export default NumbersClue;