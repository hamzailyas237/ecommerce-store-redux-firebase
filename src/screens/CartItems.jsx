

import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/Card'
import MainNavbar from '../components/Navbar'

const CartItems = () => {

    const { cartItems } = useSelector((state) => {
        return state.AddAndRemoveToCartReducer
    })

    return (
        <div>
            <MainNavbar />
            {cartItems.length === 0 ?
                <p style={{textAlign: 'center', marginTop:'20px'}}>Your cart is empty</p>
                :
                <div className='d-flex flex-wrap justify-content-around mt-5' >
                    {cartItems && cartItems.map(((product, i) => {
                        return <div key={i}>
                            <ProductCard product={product} removeItem={true} />
                        </div>
                    }))}
                </div>
            }
        </div>
    )
}

export default CartItems