import Product from "../Product/Product";
import { ContentPropsTypes, ProductType } from "./types";

export default function Content ({ type, products }: ContentPropsTypes){
    return (
        <div>
            <h1>{type}</h1>
            <ul>
                {
                    products.map(({ uuid }: ProductType) => (
                        <li key={uuid}>
                            <Product />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}