import React from 'react';
import { useParams, Link } from "react-router-dom";
import boardGames from '../boardGames.json';
import Item from './Item';

const GenreCategory = () => {
    let params = useParams();
    const itemGenre = boardGames;
    return (
        <div className='col bg-warning container'>
            <h2>Juegos de género {params.genre}</h2>
            <div className='row justify-content-center'>
                {itemGenre.filter(el=>el.genre===params.genre).map(({ id , title, pos , genre, minPlayers, maxPlayers, time, age, price})=>(
                    <Item id={id} 
                    title={title}
                    pos = {pos}
                    genre={genre}
                    minPlayers={minPlayers}
                    maxPlayers={maxPlayers}
                    time={time}
                    age={age}
                    price={price}/>
                ))}
            </div>
        </div>
    )
}

export default GenreCategory