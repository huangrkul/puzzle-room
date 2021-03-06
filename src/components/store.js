import React, {createContext, useReducer} from 'react';

const initialState = {
  clueOneCode: [],
  memoryCode: [],
  renderCode: false,
  inputNum1: 0,
  inputNum2: 0,
  inputNum3: 0,
  inputNum4: 0,
  initMemory: false,
  initWin: false,
  finalCode: '',
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'clueOne':
        return {...state, clueOneCode: action.payload};
      case 'memoryCode':
        return {...state, memoryCode: action.payload};
      case 'renderCode':
        return {...state, renderCode: action.payload};
      case 'inputNum1':
        return {...state, inputNum1: action.payload};
      case 'inputNum2':
        return {...state, inputNum2: action.payload};
      case 'inputNum3':
        return {...state, inputNum3: action.payload};
      case 'inputNum4':
        return {...state, inputNum4: action.payload};
      case 'initMemory':
        return {...state, initMemory: action.payload};
      case 'initWin':
        return {...state, initWin: action.payload};
      case 'finalCode':
        return {...state, finalCode: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };