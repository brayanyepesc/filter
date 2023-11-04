import styles from './Contacto.module.scss'
import ChatIcon from '../../assets/intercom.svg'
import CallIcon from '../../assets/phone.svg'

export default function Contacto (){
    return (
        <div className={styles.contacto}>
            <h2 className={styles.contacto_title}>¿Podemos ayudarte?</h2>
            <div className={styles.contacto_content}>
                <div className={styles.contacto_item}>
                    <div className={styles.contacto_icon}>
                        <img src={ChatIcon} alt="chat icon" className={styles.contacto_chat_icon}/>
                    </div>
                    <h3 className={styles.contacto_icon_text}>CHAT</h3>
                </div>
                <div className={styles.contacto_item}>
                    <div className={styles.contacto_icon}>
                        <img src={CallIcon} alt="call icon" className={styles.contacto_call_icon}/>
                    </div>
                    <h3 className={styles.contacto_icon_text}>LLAMAR</h3>
                </div>
            </div>
        </div>
    )
}