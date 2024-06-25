import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart() {
  const products = useSelector(state =>state.cart)
  const dispatch = useDispatch()
  const handleRemove =(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
        {products.map((product)=>(
          <div key={product.id} className='border-2 border-gray-400 m-4 flex justify-between items-center'>
            <img className='h-20  p-3' src={product.image} alt=""  />
            <div className='flex'>
            <h4>{product.title}</h4>
            <h5 className='px-4'>${product.price}</h5>
            </div>
            <button className='p-2 mr-4 bg-blue-400 text-white text-center rounded-md' onClick={()=>handleRemove(product.id)}>Remove</button>
            {/* <h5>{product.price}</h5> */}
          </div>
        ))}
    </div>
  )
}

export default Cart
