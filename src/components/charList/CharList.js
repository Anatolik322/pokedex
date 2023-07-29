import './charList.scss';
import React, {useState,useEffect} from 'react';
import Loader from "../../resources/img/pokemongo.gif"
import Card from '../card/Card';
import { useGetPokemonsQuery, useLazyGetPokemonsQuery } from '../../redux/pokeApi';

const CharList = () => {
    let pokeData = [];
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(9);
   
    let btn =
    <button className="button button__main button__long"  onClick={ (e) => {
        e.preventDefault()
        setOffset(offset+1)
        setLimit(limit+9)
        // window.scrollTo({top: 0, behavior: 'smooth'});
       }}>
        <div className="inner">load next</div>
    </button>;

    const {isSuccess, isLoading, isFetching, data} = useGetPokemonsQuery(offset, limit)
    if(isLoading||isFetching){
        btn = <button className='diable'></button>
    };

    if(isSuccess){pokeData = data;}
    
    return(
        <div className="char__list">
            <ul className="char__grid">
                {   
                    isLoading || isFetching ? <h1>Loading....</h1>:
                    isSuccess && data.name.map(e => {
                        return(   
                            <Card name={e.name}/>
                        )
                    })
                }
            </ul>
            {btn}
        </div>
    )
}
export default CharList;