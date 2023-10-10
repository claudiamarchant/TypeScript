// https://pokeapi.co/api/v2/pokemon/bulbasaur

//conexion a la api 
// var a usar

import { PokemonDetails } from "../types/types"
import { formatPokemonName } from "../utils/utils"

//se exporta porque se utilizará desde afuera

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
    //primero se agrega una respuesta para después de hacer fecth al textbox
    const response = 
    await fetch(`https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`)

    
    //try - catch
    if (!response.ok){
        throw new Error(`error fectching ${name}`)
    }

     //aqui se mapea para recibir los datos que se utilizan
    const result = await response.json()

    console.log(result)

    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.front_shiny,  
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat
    }

        //para devolver 
        return pokemon;
    
}