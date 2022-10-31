
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainNavbar from '../components/Navbar'
import { AddToCartAction, ProductIncrementAction, ProductDecrementAction } from '../store/actions/ProductActions'
import { FaPlus, FaMinus } from "react-icons/fa";

const SelectedItem = () => {

  const { selectedItems } = useSelector((state) => {
    return state.SelectedItemReducer
  })


  const currentProduct = selectedItems.reduce((obj, product) => {
    return product
  }, {})
  // console.log((currentProduct));


  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(AddToCartAction(currentProduct))
  }

  const productIncrement = () => {
    dispatch(ProductIncrementAction())
  }

  const productDecrement = () => {
    dispatch(ProductDecrementAction())
  }

  let { productCounter } = useSelector(state => {
    return state.AddAndRemoveToCartReducer
  })



  return (
    <div>
      <MainNavbar />
      {selectedItems.map((product, i) => {
        return <div className='selected-item-container' key={i}>
          <div>
            <img className='selected-item-image' src={product.image} alt="" />
          </div>
          <div className='selected-item-inner-container'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <b>{product.price}$</b>
            <div>
              <small>{product.rating ? product.rating.rate : '0'} ratings</small> {' | '}
              <small>{product.rating ? product.rating.count : '0'} orders </small>
            </div>
            <hr />

            <div className='selected-item-quantity-container'>
              <p>Quantity</p>
              <div className='selected-item-quantity-inner' >
                <p><FaPlus onClick={productIncrement} style={{ fontSize: '12px' }} /></p>
                <p>{productCounter}</p>
                <p><FaMinus onClick={productDecrement} style={{ fontSize: '12px' }} /></p>
              </div>
            </div>

            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default SelectedItem