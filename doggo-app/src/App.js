import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import BreedList from './components/BreedList';
import BreedProfile from './components/BreedProfile';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <BreedList/>
      <BreedProfile/>
    </div>
  );
}

export default App;
