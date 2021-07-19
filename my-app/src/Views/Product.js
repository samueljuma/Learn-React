import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Product(){

    const { id } = useParams()
    const url = `https://60f515ae2208920017f39edc.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
        .then(response =>{
            setProduct(response.data)
        })
    }, [url])

    if(product){
        content = 
            <div>
                <h1 className="font-bold text-2xl mb-1">
                    {product.name}
                </h1>
                <div>
                    <img
                        src={product.imageUrl}
                        alt='img'
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.price}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
    }

    return(
        <div>
            <h1>{content}</h1>
        </div>
    )
}
export default Product