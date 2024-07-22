import React, { useState } from "react";
import '../App.css';
import './navbar.css';
import Brands from "./Brands";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [showBrands, setShowBrands] = useState(false);

    const dispBrands = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setShowBrands(!showBrands); // Toggle the state
    };

    return (
        <>
            
            <div className="top-container">
                <div className="nav-bar">
                    <div className="brand-name demo">
                        <Link className="brand-name demo" to="/" >
                            AquaMall.in
                        </Link>
                    </div>
                    
                    <form className="nav-form" role="search">
                        <input className="nav-search" type="search" placeholder="Search"/>
                        <button className="nav-btn" type="submit">Search</button>
                    </form>
                    <a><Link className="a" to="/" >Home</Link></a>
                    <a className="a" onClick={dispBrands}>Brands</a>
                    <a><Link className="a" to="Cart">Your cart</Link></a>
                    <a><Link className="a" to="Account">Account</Link></a>

                    <div className="account-outer ">
                        <div className=".account-inner ">
                            <div className="account-logo ">
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div> 
                            <p>Suraj Das</p>
                    </div>
                </div>
                
                {showBrands && (
                    <div className="brands-container">
                        <Brands />
                    </div>
                )}
            </div>
        </>
    );
}
