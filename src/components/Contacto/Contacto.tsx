import styles from './Contacto.module.scss'
import { ContactoItems } from './utils'

export default function Contacto (){
    return (
        <div className={styles.contacto}>
            <h2 className={styles.contacto_title}>¿Podemos ayudarte?</h2>
            <div className={styles.contacto_content}>
                {
                    ContactoItems.map(({ id, img, text, alt }) => (
                        <div className={styles.contacto_item} key={id}>
                            <div className={styles.contacto_icon}>
                                <img src={img} alt={alt} className={styles.contacto_chat_icon}/>
                            </div>
                            <h3 className={styles.contacto_icon_text}>{text}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}