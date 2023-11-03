import styles from './Header.module.scss'
import Logo from '../../assets/logo.svg'
import MenuIcon from '../../assets/menu.svg'
import SearchIcon from '../../assets/search-2.svg'
import CartIcon from '../../assets/cart-2.svg'

export default function Header (){
    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <img 
                    alt="Menu icon"
                    className={styles.header_left_menu_icon}
                    src={MenuIcon} 
                />
                <img 
                    alt='logo icon'
                    className={styles.header_left_logo}
                    src={Logo}
                />
            </div>
            <div className={styles.header_right}>
                <img 
                    alt='search icon'
                    className={styles.header_right_search_icon}
                    src={SearchIcon}
                />
                <img 
                    alt='cart icon'
                    className={styles.header_right_cart_icon}
                    src={CartIcon}
                />
            </div>
        </header>
    )
}