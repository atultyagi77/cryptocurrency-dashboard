import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const [productList, setProductList] = useState([]) // Renamed state variable

    // Function to fetch product data from the API
    const fetchProductData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }

    useEffect(() => {
        // Fetch product data when the component mounts
        const loadProducts = async () => {
            const products = await fetchProductData()
            setProductList(products)
        }

        loadProducts()
    }, [])

    // Map over the product list to create an array of ProductCard components
    const productCards = productList.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))

    return (
        <div className='product-list'>
            <h1 className="text-4xl font-bold mb-8">E-commerce App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center mt-16 lg:grid-cols-3">
                {productCards}
            </div>
        </div>
    )
}

export default Products
