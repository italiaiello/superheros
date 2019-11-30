import React, { useState } from 'react';
import { useDataFetch } from '../hooks/DisplayHeros'
import SearchBar from './SearchBar';
import HeroCardList from './HeroCardList';
import HeroDetails from './HeroDetails';

const Hero = props => {

    const [heroName, setHeroName] = useState('');
    const [isLoading, heroData] = useDataFetch(`https://superheroapi.com/api/779757025830796/search/${heroName}`, [heroName]);

    const [searchField, setSearchField] = useState('')
    const [route, setRoute] = useState('home');

    const [heroClicked, setHeroClicked] = useState(0)

    let searchResult = searchField;
        
    const onSearchChange = event => {
        let cityName = event.target.value;
        setSearchField(cityName);
    }

    const searchWithEnterKey = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if(code === 13) { //Enter keycode
            setHeroName(searchResult);
        }
    }
    
    const onSubmitSearch = () => {
        setHeroName(searchResult);
    }
    
    const onRouteChange = (route) => {
        setRoute(route);
    }

    const handleClick = (data) => {
        setHeroClicked(data.heroId);
        console.log(data)
        setRoute('details')
    }

    return (
        isLoading ?
        <h1>Fetching Hero Data...</h1>
        :
        (
            route === 'home' ?
            <section id="content-container">
                <article>
                    <h1>Hero Hub</h1>
                    <p>Search for any hero</p>
                    <SearchBar onSearchChange={onSearchChange} searchWithEnterKey={searchWithEnterKey} onSubmitSearch={onSubmitSearch}></SearchBar>
                    <HeroCardList heroData={heroData} onRouteChange={onRouteChange} handleClick={handleClick} />
                </article>
            </section>
            :
            <HeroDetails heroData={heroData} heroClicked={heroClicked}/>

        )

    )

}

export default Hero;