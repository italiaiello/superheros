import React, {useState} from 'react';
import Hero from './components/Hero';
import './App.css';
import HeroCardList from './components/HeroCardList';

function App() {

  const [searchField, setSearchField] = useState('')
    
  const onSearchChange = event => {
      let cityName = event.target.value;
      setSearchField(cityName);
  }

  return (
    <div className="App" id="AppBackground">
      <Hero onSearchChange={onSearchChange} searchField={searchField} />
    </div>
  );
}

export default App;
