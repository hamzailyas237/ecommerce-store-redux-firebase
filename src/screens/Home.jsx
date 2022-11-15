


import React, { useState } from 'react'
import MainNavbar from "../components/Navbar";
import Slider from "../components/Slider";
import ProductCard from "../components/Card";
import { useEffect } from 'react';
import { GetProductsAction } from '../store/actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {

    const dispatch = useDispatch()
    const { productData, productsLoader } = useSelector(state => {
        return state.GetProductsReducer
    })

    // console.log(productData);

    useEffect(() => {
        dispatch(GetProductsAction())
    },[])

    return (
        <div>

            <MainNavbar />
            <Slider />

            {productsLoader ?
                <div className='loader-container'>
                    <Spinner animation="border" />
                    <p >Loading Data...</p>
                </div>
                :
                <div className='d-flex flex-wrap justify-content-around mt-5' >
                    {productData && productData.map(((product, i) => {
                        return <div key={i}>
                            <ProductCard product={product} />
                        </div>
                    }))}
                </div>
            }

        </div>
    )
}

export default Home