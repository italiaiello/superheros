import React from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';

const HeroDetails = (heroData, heroClicked) => {

    console.log(heroData.heroData[0])

    const filteredData = heroData.heroData.filter(data => data.id === heroData.heroClicked)

    

    return (
        <section>
            <h1>{`${filteredData[0].name}`}</h1>
            <article>
                <figure id="imageOfHero">
                    <img src={filteredData[0].image.url} alt={`${filteredData[0].name}`} />
                </figure>
                <p>
                    {`Combat: ${filteredData[0].powerstats.combat}`}<br></br>
                    {`Durability: ${filteredData[0].powerstats.durability}`}<br></br>
                    {`Intelligence: ${filteredData[0].powerstats.intelligence}`}<br></br>
                    {`Power: ${filteredData[0].powerstats.power}`}<br></br>
                    {`Speed: ${filteredData[0].powerstats.speed}`}<br></br>
                    {`Strength: ${filteredData[0].powerstats.strength}`}<br></br>
                </p>
            </article>
            <CircularProgressbar value={filteredData[0].powerstats.combat} text={`${filteredData[0].powerstats.combat}%`} />
            <CircularProgressbar value={filteredData[0].powerstats.durability} text={`${filteredData[0].powerstats.durability}%`} />
            <CircularProgressbar value={filteredData[0].powerstats.intelligence} text={`${filteredData[0].powerstats.intelligence}%`} />
            <CircularProgressbar value={filteredData[0].powerstats.power} text={`${filteredData[0].powerstats.power}%`} />
            <CircularProgressbar value={filteredData[0].powerstats.speed} text={`${filteredData[0].powerstats.speed}%`} />
            <CircularProgressbar value={filteredData[0].powerstats.strength} text={`${filteredData[0].powerstats.strength}%`} />
        </section>

    )

}

export default HeroDetails;