import styles from './Modal.module.scss'
import CloseIcon from '../../assets/close.svg'
import { ModalPropsTypes } from './types'

export default function Modal ({ openModal, setOpenModal, filtros, setFiltros, filtrarAction, limpiarAction }: ModalPropsTypes) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const element = e.target.value
        if(e.target.checked){
            setFiltros([...filtros, element])
        } else {
            const filtrosRemoved = filtros.filter((e) => e !== element)
            setFiltros(filtrosRemoved)
        }
    }
    return (
        <div className={styles.wrapper} hidden={openModal ? false : true}>
            <div className={styles.modal}>
                <div className={styles.close} onClick={() => setOpenModal(false)}>
                    <img src={CloseIcon} alt="close icon" className={styles.close_icon} />
                </div>
                <p className={styles.title}>Filtros</p>
                <div className={styles.input}>
                    <label htmlFor="1">Rubia</label>
                    <input type="checkbox" id='1' name='rubia' value={1} onChange={(e) => handleChange(e)}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="2">Morena</label>
                    <input type="checkbox" id='1' name='morena' value={2} onChange={(e) => handleChange(e)}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="3">Roja</label>
                    <input type="checkbox" id='1' name='roja' value={3} onChange={(e) => handleChange(e)}/>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button_limpiar} onClick={() => limpiarAction()}>LIMPIAR</button>
                    <button className={styles.button_filtrar} onClick={() => filtrarAction(filtros)}>FILTRAR</button>
                </div>
            </div>
        </div>
    )
}