import React from 'react';
import HeroCard from './HeroCard';

const HeroCardList = (heroData, onRouteChange, handleClick) => {

    console.log(heroData)

    return (
        heroData === undefined ?
        <h2>Uh oh...</h2>
        :
        <div className="cardList">
            {   
                heroData.heroData.map((hero, i) => {
                    console.log('name:', hero.name, 'image:', hero.image)
                    return (
                        <HeroCard 
                            key={i}
                            heroName={hero.name}
                            heroId={hero.id}
                            imageOfHero={hero.image}
                            onRouteChange={heroData.onRouteChange}
                            handleClick={heroData.handleClick}
                        />
                    )
                })
            }

        </div>
    )

}

export default HeroCardList;