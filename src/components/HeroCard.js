import React from 'react';

const HeroCard = (heroName, imageOfHero) => {

    console.log(heroName.imageOfHero)

    return (
        <div className="card">
            <div>
                <figure>
                    <img src={heroName.imageOfHero.url} alt={heroName.heroName}/>
                </figure>
                <p>{heroName.heroName}</p>
            </div>
        </div>
    )

}

export default HeroCard