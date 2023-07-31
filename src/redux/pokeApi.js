import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const pokeApi = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (build) => ({
        getPokemons: build.query({
            query: (offset = '', limit = 9) => `pokemon?${offset && `offset=${offset}` }&limit=${limit&& `${limit}`}`,
            transformResponse: res =>({
                name: res.results
            })
        }),
        getPokemonByName: build.query({
            query: (name) => `pokemon/${name}`,
            transformResponse: res => ({
                img: res.sprites.other.dream_world.front_default,
                types: [res.types[0], res.types[1]],
                stats: res.stats
            })
        }),
    })
})

export const {useGetPokemonsQuery, useGetPokemonByNameQuery} = pokeApi