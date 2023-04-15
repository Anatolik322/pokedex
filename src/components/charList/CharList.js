import './charList.scss';
import React, {useState,useEffect} from 'react';
import Loader from "../../resources/img/pokemongo.gif"

const CharList = ({showCharInfo}) => {

    const [charList, setCharList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12)
    let classList = 'char__item'

    let btn =
    <button className="button button__main button__long"  onClick={ () => {
        handleClick();
        console.log(offset)
        getAllCharacters(limit+12, offset);
       }}>
        <div className="inner">load more</div>
    </button>;

    const handleClick = () => {
        setLimit(limit+12);
    }
    const getAllCharacters = async (limit = 12, offset = 0) => {
        let baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
       
        const res = await fetch(baseURL)
        const data = await res.json();
       
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const resuts = await Promise.all(promises)
        setCharList(
            resuts.map(pokemon => {
                return(
                    <li 
                    key={pokemon.id} 
                    className={classList} 
                    onClick={() => {showCharInfo(pokemon.id)}} 
                    >
                        <img 
                        src={`${pokemon.sprites.other.dream_world.front_default}`} 
                        alt={pokemon.name}  
                        onMouseUp = {() => { classList += '_selected'}}
                        />
                        <div className="char__name">{pokemon.name}</div>
                        <div className='pokemon_type'>
                            {
                                pokemon.types.map(item => {
                                    return(
                                        <span>
                                            {item.type.name}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </li>
                )
            })
        )
    }

    
    useEffect(() => {
       getAllCharacters();
    }, [])      
    
    return (
        <div className="char__list">
            <ul className="char__grid">
                {charList}
            </ul>
   
            {btn}
        </div>
    )
}

export default CharList;