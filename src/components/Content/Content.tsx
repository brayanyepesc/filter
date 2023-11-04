import Product from "../Product/Product";

export default function Content (){
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                <Product />
                <Product />
                <Product />
            </ul>
        </div>
    )
}