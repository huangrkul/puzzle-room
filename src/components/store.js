import React, {createContext, useReducer} from 'react';

const initialState = {
  clueOneCode: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'clueOne':
        return {...state, clueOneCode: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };