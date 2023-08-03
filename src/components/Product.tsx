import React, {useState} from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
const [details, setDetails ] = useState(false)

const btnBgClassName = details ? 'bg-purple-300' : 'bg-green-300'

const btnClasses = ['border py-2 px-4', btnBgClassName]

return (
    <div
    className="border py-4 px-4 rounded flex flex-col items-center mb-4"
    >
        <img src={product.image} className="w-2/6" alt= { product.title} />
        <p className="mt-2"> { product.title }</p>
        <p className="font-bold mt-1 mb-4">{product.price}</p>
        <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
        >
           {details ? 'Hide Details' : 'Show Details'}
        </button>

        {details && <div>
            <p>{ product.description }</p>
            <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
        </div>}
        
    </div>
)
}

