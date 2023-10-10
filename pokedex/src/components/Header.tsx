import styles from './header.module.css'

/*se reciben los datos
con typescript hay que decirle que tipo de datos se va a pasar para que no de errores*/
type HeaderProps = {
    query: string
    setQuery: (query: string) => void /*se pasa una funcion */
}

const Header = ({ query, setQuery }: HeaderProps) => {
    return(
        <header className={styles.header}>
            <p>Pokedex</p>
            <input className={styles.input} 
            placeholder="buscar pokemon" 
            type="text"
            value={query} 
            /*onchange para que cambie el estado del evento y reciba el value*/
            onChange={(event) => setQuery(event.target.value)}
            />
        </header>
    )
}

export default Header