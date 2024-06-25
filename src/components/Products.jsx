import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const [products, setProducts] = useState([])

    async function fetchData() {
        const response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        return data
    }

    useEffect(() => {
        fetchData().then((data) => {
            setProducts(data)
        })
    }, [])

    const productCard=  products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))

    return (
        <div className=''>
            <h1 className="text-4xl font-bold mb-8">E-commerce App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center mt-16 lg:grid-cols-3">
                {productCard}
            </div>
        </div>
    )
}

export default Products