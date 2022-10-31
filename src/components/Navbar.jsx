import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Logout from './Logout';
import SaleNow from './SaleNow'
import logo from '../images/logo.png'

const MainNavbar = () => {
    const { cartItems } = useSelector((state) => {
        return state.AddAndRemoveToCartReducer
    })

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar-container'>
                <Container>
                    <Navbar.Brand>
                        <img style={{height:'40px'}} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-links">
                            <Link className='m-2' to="/home">Home</Link>
                            <Link className='m-2' to="/mycart">My Cart</Link>
                        </Nav>
                        <Nav>
                            <Link to='mycart'>
                                <FaCartPlus className='cart' />
                                <small className='cart-items-length'>{cartItems.length}</small>
                            </Link>

                            <SaleNow />

                            <Link to='mycart' className='mx-2 mt-2'>
                                <Logout />
                            </Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default MainNavbar

{/* <Navbar bg="light" expand="lg">
<Container>
    <Navbar.Brand> STORE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links" >
            <Link className='m-2' to="/home">Home</Link>
            <Link className='m-2' to="/mycart">My Cart</Link>
        </Nav>


        <Link to='mycart'>
            <FaCartPlus style={{ position: 'absolute', right: '110px', top: '20px' }} />
        </Link>
        <span style={{ position: 'absolute', right: '100px', top: '0px' }}>{cartItems.length}</span>

    </Navbar.Collapse>

</Container>
<SaleNow />
<Logout />
</Navbar> */}
