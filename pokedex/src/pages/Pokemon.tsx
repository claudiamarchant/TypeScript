import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from '../assets/pokeball.png'
import Footer from '../components/Footer';
// styles 
import styles from './pokemon.module.css'
import { useEffect, useState } from 'react';
//crea importacion pokemon
import { PokemonDetails } from '../types/types';
//se importa api para recibir los datos y mostrarlos 
import { fetchPokemon } from '../api/fetchPokemon';
//import de carga
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils'

const Pokemon = () => {
    //para cargar pagina
    const [isLoading, setIsLoading] = useState(false)
    //constante donde se cambiará el estado - pokemonDetails
    const [pokemon, setPokemon] = useState<PokemonDetails>()

    //para que la api funcione pasando parametros
    const { name } = (useParams)()
    // return <div>{name}</div>
    //para go back
    const navigate = useNavigate()

    useEffect(() => {
        async function getPokemon(){
            setIsLoading(true)
            await waitFor(100)
            const fetchedPokemon = await fetchPokemon(name as string)
            // setear
            setPokemon(fetchedPokemon)
            setIsLoading(false)
        }
        // obtener
        getPokemon()
    }, [name])

      //if carga
      if (isLoading || !pokemon){
        return <LoadingScreen />
    }

    return (
        <>
        {/* button go back */}
        <button className={styles.pokeballButton} onClick={() => navigate(-1)}> 
            <img className={styles.pokeballImg} src={PokeballImg} alt='pokeball' />{" "}
            <div className={styles.text}>volver </div>
        </button>
        <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
                <div className={styles.pokemonTitle} ><h1>{name?.toUpperCase()}</h1></div>
                <div className={styles.text}>N° {pokemon?.id}</div>
                <div>
                    <img className={styles.pokemonInfoImg} 
                    src={pokemon?.imgSrc}
                    alt={pokemon?.name}/>
                </div>
                <div className={styles.text}>HP: {pokemon?.hp}</div>
                <div className={styles.text}>Attack: {pokemon?.attack}</div>
                <div className={styles.text}>Defense: {pokemon?.defense}</div>
            </main>
        </div>
        <Footer />
        </>
    )
}

export default Pokemon;