import styles from './Modal.module.scss'
import CloseIcon from '../../assets/close.svg'
import { ModalPropsTypes } from './types'
import FiltroIcon from '../../assets/filters.svg'
import { TiposFiltros } from './utils'

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
                {
                    TiposFiltros.map(({ id, name, value, label }) => (
                        <div className={styles.input} key={id}>
                            <label htmlFor={id}>{label}</label>
                            <input type="checkbox" id={id} name={name} value={value} onChange={(e) => handleChange(e)}/>
                        </div>
                    ))
                }
                <div className={styles.buttons}>
                    <button className={styles.button_limpiar} onClick={() => limpiarAction()}>LIMPIAR</button>
                    <button className={styles.button_filtrar} onClick={() => filtrarAction(filtros)}>FILTRAR
                    <img src={FiltroIcon} alt="filtro icon" className={styles.filtro_icon} />
                    {
                        filtros.length > 0 && (<div className={styles.filtros_number}>{filtros.length}</div>)
                    }
                    </button>
                </div>
            </div>
        </div>
    )
}