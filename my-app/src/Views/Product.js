import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

function Product(){

    const { id } = useParams()
    const url = `https://60f515ae2208920017f39edc.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState(
        {
            loading: false,
            data: null,
            error: false
        }
    )

    let content = null

    useEffect(() => {

        //do this before setting up product
        setProduct(
            {
                loading: true,
                data: null,
                error: false
            }
        )
        axios.get(url)
        .then(response =>{
            setProduct(
                {
                    loading: false,
                    data: response.data,
                    error: false
                }
            )
        }).catch(() => {
            setProduct(
                {
                    loading: false,
                    data: null,
                    error: true
                })
        })
    }, [url])

    if(product.error){
        content= <div>There was an error. Try again later</div>
    }

    if(product.loading){
        content = <div> <Loader/></div>
    }

    if(product.data){
        content = 
            <div className="content-center">
                <h1 className="font-bold text-xl mb-1">
                    {product.data.name}
                </h1>
                {/* <div>
                    <img
                        src={product.data.imageUrl}
                        alt='img'
                    />
                </div> */}
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
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