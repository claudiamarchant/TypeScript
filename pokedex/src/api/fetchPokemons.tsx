// https://unpkg.com/pokemons@1.1.0/pokemons.json
import { Pokemon } from "../types/types"
import { formatPokemonName } from "../utils/utils"

//se exporta porque se utilizará desde afuera
//conexion a la api
//recibe variales con información
//funcion para elementos con caracteres especiales

export async function fetchPokemons(): Promise<Pokemon[]> {
    //primero se agrega una respuesta para después de hacer fecth al textbox
    const response = 
    await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json')

    if (!response.ok){
        throw new Error('failed to fecth pokemon')
    }

    const results = await response.json()
    console.log(results)

     //aqui se mapea para recibir los datos que se utilizan
     const pokemons = results.results.map((pokemon: any) => ({
         name: pokemon.name,
         id: pokemon.national_number,
         imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`
     }))
    
    //en caso de tener problemas con la api deja un id unico
     const uniquePokemons = pokemons.filter(
         (pokemon: any, index: number) =>
            pokemons.findIndex((other: any) => other.id === pokemon.id) === index
     )
     
     //para devolver 
     return uniquePokemons;
}
