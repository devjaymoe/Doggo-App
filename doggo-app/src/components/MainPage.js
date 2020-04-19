import React, { useContext } from 'react';
import { store } from '../store/store.js';

const MainPage = () => {
  const globalState = useContext(store);
  console.log(globalState.state.color); // this will return { color: red }
  return (
      <h1>{globalState.state.color}</h1>
  )
};

export default MainPage