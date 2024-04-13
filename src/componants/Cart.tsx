import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../redux/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items)
  console.log('cartItems', cartItems)
  const dispatch = useDispatch()

  const handleClear = () => {
    dispatch(clearCart())
  }

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        {cartItems.length ?
          <div>
            <button className='p-2 m-2 bg-gray-200 rounded-lg' onClick={handleClear}>Clear Cart</button>
            <ItemList items={cartItems} />
          </div>
          : <h1>Cart is empty! Add items to cart</h1>
        }
      </div>
    </div>
  )
}

export default Cart