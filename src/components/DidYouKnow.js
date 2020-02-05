import React, { useEffect, useContext } from 'react';
import { store } from './store.js';
import { setAni } from '../js/snippets.js';

const DidYouKnow = () => {

  const globalState = useContext(store);
  const { dispatch } = globalState;
  let timer;

  const startSequence = () => {
    document.querySelector('.did-you-know-svg').classList.remove('hide');
    setAni('.did-you-know-svg polyline:first-of-type',100, 'polyline-animate');
    setAni('.did-you-know-svg polyline:nth-of-type(2)', 200, 'polyline-animate');
    setAni('.did-you-know-svg text:nth-child(2)', 300, 'title-pos2');
    setAni('.did-you-know-svg text:nth-child(1)', 400, 'title-pos3');
    setAni('.did-you-know-svg .title-subhead', 1600, 'title-subhead-animate');
    setAni('.did-you-know-svg polyline:nth-of-type(3)', 2000, 'polyline-animate-infinite');
    setAni('.did-you-know-svg polyline:last-of-type', 1600, 'polyline-animate-infinite');
  }

  const handleO = () => {
    setAni('.did-you-know-svg text:nth-child(4)', 0, 'title-o-animate');
    timer = setTimeout(() => {
      dispatch({type: 'renderCode', payload: true});
    }, 1500)
  }

  useEffect(() => {
    startSequence();
  },[])

  return (
    <section className="did-you-know">
      <svg className="did-you-know-svg hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 870 135">
        <text className="title-font title title-pos">DID YOU KNOW</text>
        <text className="title-font title title-pos">DID YOU KNOW</text>
        <text className="title-font title title-pos">DID YOU KNOW</text>
        <text onClick={handleO} className="title-font title title-o">O</text>
        <text className="base-font title-subhead">What you seek is clOser than you think</text>
        <polyline className="" points="13 35.43 264.76 35.43 353.88 124.84 571.12 124.84"/>
        <polyline className="" points="13 43.43 258.65 43.43 349.78 133.49 571.12 132.84"/>
        <polyline className="" points="13 35.43 264.76 35.43 353.88 124.84 571.12 124.84"/>
        <polyline className="" points="13 43.43 258.65 43.43 349.78 133.49 571.12 132.84"/>
      </svg>
    </section>
  );
}

export default DidYouKnow;