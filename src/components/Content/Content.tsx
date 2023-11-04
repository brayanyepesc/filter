import Product from "../Product/Product";
import { ContentPropsTypes, ProductType } from "./types";
import styles from './Content.module.scss'

export default function Content ({ type, products }: ContentPropsTypes){
    return (
        <div className={styles.content}>
            <h1 className={styles.content_title}>{type}</h1>
            <ul className={styles.content_wrapper_products}>
                {
                    products.map((product: ProductType) => (
                        <Product product={product} key={product.uuid}/>
                    ))
                }
            </ul>
        </div>
    )
}