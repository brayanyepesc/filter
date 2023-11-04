import Contacto from '../Contacto/Contacto'
import styles from './Footer.module.scss'
import { Links } from './utils'
import InstagramIcon from '../../assets/instagram.svg'

export default function Footer (){
    return (
        <div className={styles.footer}>
            <Contacto />
            <ul className={styles.footer_links}>
               {
                Links.map(({ id, text }) => (
                    <li key={id} className={styles.footer_link}>{text}</li>
                ))
               }
            </ul>
            <div className={styles.footer_instagram}>
                <div className={styles.footer_instagram_wrapper}>
                    <img src={InstagramIcon} alt="instagram icon" className={styles.footer_instagram_icon} />
                </div>
                <p className={styles.footer_politica}>POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES</p>
            </div>
            <div className={styles.footer_creditos}>@2020 Axiacore</div>
        </div>
    )
}