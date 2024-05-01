import { useFavorites } from '../../hooks/useFavorites';
import styles from './Header.module.css'
import { FaRegHeart } from "react-icons/fa6";

const Header = () => {
    const { favorites } = useFavorites()

    return (
        <header className={styles.header}>
            <FaRegHeart fontSize={35}/>
            <span>{favorites.length}</span>
        </header>
    )
}

export default Header