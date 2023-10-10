import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import styles from './pokemons.module.css'

import { fetchPokemons } from '../api/fetchPokemons'
import { Pokemon } from '../types/types'
//import de carga
import LoadingScreen from '../components/LoadingScreen'
import { waitFor } from '../utils/utils'


/*aqui se hace la busqueda - se pasan los datos del input 
se pasa lo que se recibe del header al main */
const Pokemons = () => {
    //para cargar
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        const fecthAllPokemons = async () => {
            //para tiempo de carga de la pagina
            setIsLoading(true)
            await waitFor(800)
            const allPokemons = await fetchPokemons()
            setPokemons(allPokemons)
            setIsLoading(false)
        }
        fecthAllPokemons()
    }, [])

    //para ordenar el tiempo de carga
    if (isLoading || !pokemons){
        return <LoadingScreen />
    }

    //para input y filtrar pokemon - luego solo se llama la funcion
    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase())
    })

    return (
        <>
          <Header query={query} setQuery={setQuery} />
          <main>
            <nav className={styles.nav}>
              {filteredPokemons?.slice(0, 151).map((pokemon) => (
                <Link key={pokemon.id} className={styles.listItem}
                   to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                  <img className={styles.listItemIcon} 
                    src={pokemon.imgSrc}
                    alt={pokemon.name}/>
                  <div className={styles.listItemText}>
                    <span>{pokemon.name}</span>
                    <span>{pokemon.id}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </main>
          <Footer />
        </>
      );
    };

export default Pokemons;