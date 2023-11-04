import styles from './SigueMercando.module.scss'
import ArrowRight from '../../assets/arrow-right.svg'

export default function SigueMercando () {
    return (
        <div className={styles.siguemercando}>
            <div className={styles.siguemercando_left}>
                <p className={styles.siguemercando_subtitle}>Sigue mercando</p>
                <h2 className={styles.siguemercando_title}>Vinos</h2>
            </div>
            <div className={styles.siguemercando_right}>
                <img src={ArrowRight} alt="arrow right" className={styles.siguemercando_icon}/>
            </div>
        </div>
    )
}