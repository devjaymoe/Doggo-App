import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import BreedList from './components/BreedList';
import BreedProfile from './components/BreedProfile';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path='/'>
        <MainPage/>
      </Route>
      <Route path='/breed_list'>
        <BreedList/>
      </Route>
      <Route path='/breed_profile'>
        <BreedProfile/>
      </Route>

    </div>
  );
}

export default App;
