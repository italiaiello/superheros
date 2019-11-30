import React from 'react';

const HeroCard = (heroName, heroId, imageOfHero, onRouteChange, handleClick) => {

    console.log(heroName)

    return (
        <div className="card">
            <div onClick={heroName.handleClick.bind(this, heroName)}>
                <figure>
                    <img src={heroName.imageOfHero.url} alt={heroName.heroName}/>
                </figure>
                <p>{heroName.heroName}</p>
            </div>
        </div>
    )

}

export default HeroCard