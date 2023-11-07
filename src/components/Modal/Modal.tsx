import styles from './Modal.module.scss'
import CloseIcon from '../../assets/close.svg'
import { ModalPropsTypes } from './types'

export default function Modal ({ openModal, setOpenModal }: ModalPropsTypes) {
    return (
        <div className={styles.wrapper} hidden={openModal ? false : true}>
            <div className={styles.modal}>
                <div className={styles.close} onClick={() => setOpenModal(false)}>
                    <img src={CloseIcon} alt="close icon" className={styles.close_icon} />
                </div>
                <p className={styles.title}>Filtros</p>
                <div className={styles.input}>
                    <label htmlFor="1">Rubia</label>
                    <input type="checkbox" id='1' name='rubia' value={1}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="2">Morena</label>
                    <input type="checkbox" id='1' name='morena' value={2}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="3">Roja</label>
                    <input type="checkbox" id='1' name='roja' value={3}/>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button_limpiar}>LIMPIAR</button>
                    <button className={styles.button_filtrar}>FILTRAR</button>
                </div>
            </div>
        </div>
    )
}