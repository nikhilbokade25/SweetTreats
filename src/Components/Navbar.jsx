import React from 'react';
import './Navbar.css';
import ShoppingCart from '../assets/cart.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import { Link, animateScroll as Scroll } from 'react-scroll';

export default function Navbar() {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        navRef.current.classList.toggle("nav_closed");
    }

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    }

    return (
        <div className="header">
            <h3 className="logo">Sweet Treats</h3>
            <nav className="nav" ref={navRef}>
                <ul>
                    <li><a href="#home"><Link onClick={hideNavbar}>Home</Link></a></li>
                    <li><a href="#about"><Link onClick={hideNavbar}>About Us</Link></a></li>
                    <li><a href="#products"><Link onClick={hideNavbar}>Products</Link></a></li>
                    <li><a href="#order"><Link onClick={hideNavbar}></Link>Order Online</a></li>
                    <li><a href="#contact"><Link onClick={hideNavbar}>Contact Us</Link></a></li>
                </ul>
                <button className="nav_btn nav_btn_close" onClick={showNavbar}>
                    <FaTimes /><span>CLOSE</span>
                </button>
            </nav>
            <div className="menu-cart-container">
                <button className="nav_btn nav_btn_menu" onClick={showNavbar}>
                    <FaBars /><span>MENU</span>
                </button>
                <div className="cart-icon">
                    <img src={ShoppingCart} alt="Cart" />
                </div>
            </div>
        </div>
    )
}
