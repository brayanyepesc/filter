import styles from './Product.module.scss'
import ProductImage from '../../assets/Product.png'
import { ProductPropsTypes } from './types'
import AddPoints from '../../utils/AddPoints'

export default function Product ({ product }: ProductPropsTypes){
    const { name, description, price } = product
    return (
        <div className={styles.product}>
            <div className={styles.product_content}>
                <div className={styles.product_image_wrapper}>
                    <img 
                        src={ProductImage}
                        alt="imagen producto" 
                        className={styles.product_image}
                    />
                </div>
                <h2 className={styles.product_name}>{name}</h2>
                <p className={styles.product_description}>{description}</p>
                <h3 className={styles.product_price}>${AddPoints(price)}</h3>
            </div>
            <button className={styles.product_btn}>AGREGAR</button>
        </div>
    )
}