import React from 'react';
import HeroCard from './HeroCard';

const HeroCardList = (heroData) => {

    console.log(heroData)

    return (
        heroData === undefined ?
        <h2>Uh oh...</h2>
        :
        <div>
            {   
                heroData.heroData.map(hero => {
                    console.log('name:', hero.name, 'image:', hero.image)
                    return (
                        <HeroCard 
                            heroName={hero.name}
                            imageOfHero={hero.image}
                        />
                    )
                })
            }

        </div>
    )

}

export default HeroCardList;