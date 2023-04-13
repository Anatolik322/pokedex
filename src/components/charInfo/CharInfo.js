import './charInfo.scss';

const CharInfo = ({charInfo}) => {
    
    return (
        <div className="char__info">
            <div className="char__basics">
                <img src={charInfo.image} alt={charInfo.name}/>
                <div>
                    <div className="char__info-name">{charInfo.name}</div>
                    <div className="char__btns">
                        {charInfo.types.map(item => {
                            return(
                                <a  rel="noreferrer" target="_blank" className="button button__main">
                                    <div className="inner">{item.type.name}</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ul className="char__comics-list">
                {
                    charInfo.abilities.map(item => {
                        return(
                            <li className="char__comics-item" key={item}>
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