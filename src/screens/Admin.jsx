

import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/Card'
import MainNavbar from '../components/Navbar'

const Admin = () => {
  const user = localStorage.getItem("uid");
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== "at64ZIYgqaawRyCAkH6xMYBRNwS2") {
      navigate(-1)
    }
  }, [])


  const { productsToApprove } = useSelector((state) => {
    return state.AddAndRemoveProductFromAdminPanelReducer
  })

  console.log(productsToApprove);
  return (
    <div>
      <MainNavbar />
      {productsToApprove.map((product, i) => {
        return <ProductCard product={product} key={i} productToApprove={true} />
      })}
    </div>
  )
}

export default Admin  