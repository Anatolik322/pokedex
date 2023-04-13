import React, { useState} from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo"; 
import Char from "../../resources/img/charakter.png"
import Squirtel from "../../resources/img/Squirtle.png"



const App = () => {
    
    const [charInfo, setCharInfo] = useState({
        name: 'Tap on pokemon card to learn more...',
        image: Squirtel ,
        abilities: [],
        types:[] 
    })
   
    const showCharInfo = async (id) => {
        const baseURL = 'http://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon/${id}/`);
        const data = await res.json();
        console.log(data.stats[0].stat.name);
        
        setCharInfo({
            name: data.name,
            image: data.sprites.other.dream_world.front_default ,
            abilities: data.stats,
            types: data.types
        })     
    
    }

    return (
        <div className="app">
            <AppHeader />
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList 
                    charInfo = {charInfo} 
                    setCharInfo={setCharInfo} 
                    showCharInfo = {showCharInfo}
                      />
                    <CharInfo
                    charInfo = {charInfo}
                     />
                </div>
                <img className="bg-decoration" src={Char} alt="vision"/>
            </main>
        </div>
    )
}

export default App;