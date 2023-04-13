

class PokeServise{
    _apiBase = 'https://pokeapi.co/api/v2/pokemon/';
    
    getAllCharacters = async (limit = 9, offset = 0) => {
        const baseURL = 'http://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const resuts = await Promise.all(promises)
        console.log(resuts);
       return resuts;
    }
}

export default PokeServise;
