import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const HeroDetails = (heroData, heroClicked, onRouteChange) => {

    console.log(heroData.heroData[0])

    const filteredData = heroData.heroData.filter(data => data.id === heroData.heroClicked)

    let heroAlignment = 'good';

    if (filteredData[0].biography.alignment === 'bad') {
        heroAlignment = 'bad'
    } else if (filteredData[0].biography.alignment === 'neutral') {
        heroAlignment = 'neutral'
    }

    console.log(heroAlignment)

    

    return (
        <section id="heroDetails" className={heroAlignment}>
            <h1>{`${filteredData[0].name}`}</h1>
            <article id="detailsOfHero">
                <article id="imageOfHero"> 
                    <figure>
                        <img src={filteredData[0].image.url} alt={`${filteredData[0].name}`} />
                    </figure>
                </article>
                <article className="heroStats">
                    <article className="statsLabelled">
                        <p>Combat: {console.log(heroAlignment)}</p>
                        <CircularProgressbar value={filteredData[0].powerstats.combat} text={`${filteredData[0].powerstats.combat}%`} />
                    </article>
                    <article className="statsLabelled">
                        <p>Durability:</p>
                        <CircularProgressbar value={filteredData[0].powerstats.durability} text={`${filteredData[0].powerstats.durability}%`} />
                    </article>
                    <article className="statsLabelled">
                        <p>Intelligence:</p>
                        <CircularProgressbar value={filteredData[0].powerstats.intelligence} text={`${filteredData[0].powerstats.intelligence}%`} />
                    </article>
                    <article className="statsLabelled">
                        <p>Power:</p>
                        <CircularProgressbar value={filteredData[0].powerstats.power} text={`${filteredData[0].powerstats.power}%`} />
                    </article>
                    <article className="statsLabelled">
                        <p>Speed:</p>
                        <CircularProgressbar value={filteredData[0].powerstats.speed} text={`${filteredData[0].powerstats.speed}%`} />
                    </article>
                    <article className="statsLabelled">
                        <p>Strength:</p>
                        <CircularProgressbar value={filteredData[0].powerstats.strength} text={`${filteredData[0].powerstats.strength}%`} />
                    </article>
                </article>
                <article className="heroInfo">
                    <p><span>Place of Birth:</span>{` ${filteredData[0].biography['place-of-birth']}`}</p>
                    <p><span>Gender:</span>{` ${filteredData[0].appearance.gender}`}</p>
                    <p><span>Weight:</span>{` ${filteredData[0].appearance.weight[1]}`}</p>
                    <p><span>Height:</span>{` ${filteredData[0].appearance.height[0]}`}</p>
                    <p><span>First Appearance:</span>{` ${filteredData[0].biography['first-appearance']}`}</p>
                    <p><span>Publisher:</span>{` ${filteredData[0].biography.publisher}`}</p>
                    <p><span>Alignment:</span>{` ${filteredData[0].biography.alignment}`}</p>
                    <p><span>Group Affiliation:</span>{` ${filteredData[0].connections['group-affiliation']}`}</p>
                </article>
            </article>
            <button onClick={heroData.onRouteChange.bind(this, 'home')}>Back</button>
        </section>

    )

}

export default HeroDetails;