import styles from './FiltrarButton.module.scss'
import { FiltrarButtonPropsTypes } from './types'

export default function FiltrarButton ({ setOpenModal }: FiltrarButtonPropsTypes) {
    return (
        <div className={styles.filtrar} onClick={() => setOpenModal(true)}>
            <button className={styles.filtrar_button}>FILTRAR</button>
        </div>
    )
}