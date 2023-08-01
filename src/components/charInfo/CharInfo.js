import './charInfo.scss';
import { useGetPokemonByNameQuery } from '../../redux/pokeApi';
import { useEffect, useState } from 'react';

const CharInfo = ({name}) => {
    const [charName, setCharName] = useState(name);
    useEffect(() => {
        console.log('reload')
        setCharName(name);
    }, [name])
    const {isSuccess, isLoading, data} = useGetPokemonByNameQuery(charName)
    return (
        <div className="char__info">
            <div className="char__basics">
                <img src={isSuccess ? data.img: null} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        {isSuccess && data.types.map(item => {
                            return(
                                <a  rel="noreferrer" target="_blank" className="button button__main" key={Math.random()}>
                                    <div className="inner">{item.type.name}</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ul className="char__comics-list">
                {
                    isSuccess && data.stats.map(item => {
                        return(
                            <li className="char__comics-item" key={Math.random()}>
                                {item.stat.name}: {item.base_stat}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CharInfo;