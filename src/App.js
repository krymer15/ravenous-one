import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinesList from '../src/components/BusinessList';
import SearchBar from '../src/components/SearchBar';

class App extends React.Component() {
  render () {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default App;
