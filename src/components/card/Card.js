import React from 'react'
import { useGetPokemonByNameQuery } from '../../redux/pokeApi'
import Spiner from '../../resources/img/loading.gif'

function Card({name}) {

    const {isLoading,isSuccess,data, isFetching} = useGetPokemonByNameQuery(name);
   
  return (
     isLoading ? 
    <li  className='char__item'>
        <img src={Spiner}></img>
        <div className="char__name">loading...</div>
    </li>:
    isSuccess && 
    <li key={name} className='char__item'>
        <img src={data.img}></img>
        <div className="char__name">{name}</div>
    </li>
  )
}

export default Card
