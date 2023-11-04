export interface ProductType {
    uuid: number;
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface ContentPropsTypes {
    type: string;
    products: ProductType[]
}
