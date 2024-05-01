import { useState } from "react"
import { IProduct } from "../models"

interface ProductsProps {
    product: IProduct
}

export function Products({ product }: ProductsProps) {
    const [details, setDetails] = useState(false)

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/3" alt="no image" />
            <h3>{product.title}</h3>
            <span className="font-bold">${product.price}</span>
            <button
                className={details ? 'py-2 px-4 border bg-red-400' : 'py-2 px-4 border bg-yellow-400'}
                onClick={() => setDetails(prev => !prev)}>
                {details ? 'close details' : 'show details'}
            </button>

            {details &&
                <>
                    <p>{product.description}</p>
                    <p>Rating: <span style={{ fontWeight: 'bold' }}>✨{product.rating?.rate}</span></p>
                </>
            }

        </div>
    )
}