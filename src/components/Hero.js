import React, { useState } from 'react';
import { useDataFetch } from '../hooks/DisplayHeros'
import SearchBar from './SearchBar';
import HeroCardList from './HeroCardList';

const Hero = props => {

    let searchResult = props.searchField;

    const [heroName, setHeroName] = useState('');
    const [isLoading, heroData] = useDataFetch(`https://superheroapi.com/api/YOUR_API_KEY/search/${heroName}`, [heroName]);

    

    const searchWithEnterKey = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if(code === 13) { //Enter keycode
            setHeroName(searchResult);
        }
    }

    const onSubmitSearch = () => {
        setHeroName(searchResult);
    }

    return (
        isLoading ?
        <h1>Fetching Hero Data...</h1>
        :
        <section id="content-container">
            <article>
                <h1>Hero Hub</h1>
                <p>Search for any hero</p>
                <SearchBar onSearchChange={props.onSearchChange} searchWithEnterKey={searchWithEnterKey} onSubmitSearch={onSubmitSearch}></SearchBar>
                <HeroCardList heroData={heroData}/>
            </article>
        </section>
    )

}

export default Hero;