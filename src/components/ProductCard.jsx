
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
// import classNames from 'classnames';

const ProductCard = ({ product }) => {
    const { title, price, image } = product;
    const dispatch = useDispatch()
    return (
        <div className="flex">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex-shrink-0 mb-4">
                    <img
                        // className="p-8 rounded-t-lg" 
                        className="flex-shrink-0 w-full h-80 object-cover mb-4 rounded-t-lg p-8"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="px-5 pb-5">
                    {/* <a href="#"> */}
                    <div className="flex-grow flex flex-col justify-between">
                        {/* <div> */}
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </div>


                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button
                            onClick={() => dispatch(add(product))}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ProductCard;
