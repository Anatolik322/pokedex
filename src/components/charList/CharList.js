import './charList.scss';
import React, {useState,useEffect} from 'react';

const CharList = ({showCharInfo}) => {

    const [charList, setCharList] = useState([]);
    const [listQ, setListQ] = useState(9);
    let classList = 'char__item'

    let btn =
    <button className="button button__main button__long" onClick={() => {
        getAllCharacters(21);
        setListQ(21)}}>
        <div className="inner">load more</div>
    </button>;

    if(listQ > 9){
        btn =
        <button
         className="button button__main button__long" 
         onClick={() => {
            getAllCharacters(9); 
            setListQ(9)}}>
            <div className="inner">show less</div>
        </button>
    }
    
    const getAllCharacters = async (limit = 9, offset = 0) => {
        let baseURL = `http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
       
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