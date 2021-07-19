import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home(){

   
    const url = "https://60f515ae2208920017f39edc.mockapi.io/api/v1/products?page=1&limit=10"
    const [products, setProducts] = useState(
        {
            loading: false,
            data: null,
            error: false
        }
    )

    let content = null

    useEffect(() => {

        //do this before setting up product
        setProducts(
            {
                loading: true,
                data: null,
                error: false
            }
        )
        axios.get(url)
        .then(response =>{
            setProducts(
                {
                    loading: false,
                    data: response.data,
                    error: false
                }
            )
        }).catch(() => {
            setProducts(
                {
                    loading: false,
                    data: null,
                    error: true
                })
        })
    }, [url])

    if(products.error){
        content= <div>There was an error. Try again later</div>
    }

    if(products.loading){
        content = <div> <Loader/></div>
    }

    if(products.data){
        content = 
        products.data.map((product) =>
            <div key={product.id}>
                <ProductCard
                product={product}/>
            </div>
        )
            
    }

    return(
        <div>
            <h1 className="font-bold text-center text2xl mb-3">Best Sellers</h1>
            {content}
        </div>
    )
}
export default Home