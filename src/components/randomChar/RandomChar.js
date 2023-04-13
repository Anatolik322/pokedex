import './randomChar.scss';
import React,{useState} from 'react';
import Pokebol from '../../resources/img/Pokeball.png';
import Pikachu from '../../resources/img/pikachu.png';
import undef from '../../resources/img/undef.jpg'


const RandomChar = () => {
    const [char, setChar] = useState({
        name: 'Pikachu',
        image: Pikachu,
        type: [],
        wiki: null
    })
   
    const updateChar = async(id) => {
        id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon/${id}/`);
        const data = await res.json();
        let img = data.sprites.other.dream_world.front_default || undef;

        setChar({
            name: data.name,
            image: img ,
            type: data.types,
            wiki: null  
        })
    }
    
   
    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={char.image} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{char.name}</p>
                    <p className="randomchar__descr"></p>
                    <div className="randomchar__btns">
                        {
                            char.type.map(item => {
                                return(
                                    <a  rel="noreferrer" target="_blank" className="button button__main">
                                        <div className="inner">{item.type.name}</div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner" onClick={updateChar}>try it</div>
                </button>
                <img src={Pokebol} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

export default RandomChar;