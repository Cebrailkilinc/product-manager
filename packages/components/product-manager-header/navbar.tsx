import React from 'react'
import "./navbar.scss"
import Image from 'next/image'
import pp from "@/packages/assets/indir.png"
const ProductManagerNavbar = () => {
    return (
        <div className="product-container">
            <h1 className="product-title">Welcome Gabi!</h1>
            <div className="logo-container">
                <Image className="header-logo" src={pp} alt="Logo" />
                <div className='header-user'>
                    <h1 className='header-user-name'>Gabi Diana</h1>
                    <h4 className='header-user-username'>@gabidiana</h4>
                </div>
                
            </div>
        </div>

    )
}

export default ProductManagerNavbar
