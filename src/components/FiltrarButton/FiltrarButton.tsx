import styles from './FiltrarButton.module.scss'

export default function FiltrarButton () {
    return (
        <div className={styles.filtrar}>
            <button className={styles.filtrar_button}>FILTRAR</button>
        </div>
    )
}