import { Link } from "react-router-dom"

//assets - se le agrega el import de la img
//y a global.d.ts para el import de las img 
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'

//para el css
import styles from './footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to='/pokemons'>
                <img className={styles.footerIcon} src={PokemonPic} alt='Pokeball' /> Pokemon
            </Link>
            <Link className={styles.footerLink} to='/pokemons'>
                <img className={styles.footerIcon} src={ItemsPic} alt='Pokeball' /> Items
            </Link>
            <Link className={styles.footerLink} to='/pokemons'>
                <img className={styles.footerIcon} src={LocationPic} alt='Pokeball' /> Map
            </Link>
        </footer>    
    )
}

export default Footer