//para agregar los tipos de variables

//donde se define el tipo de dato a recibir de la apis

export type Pokemon = {
    name: string
    id: string
    imgSrc: string
}

export type PokemonDetails = {
    name: string
    id: string
    imgSrc: string
    hp: number
    attack: number
    defense: number
}