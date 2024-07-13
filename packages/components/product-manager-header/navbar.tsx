import React from 'react'
import "./navbar.scss"
import Image from 'next/image'
import pp from "@/packages/assets/indir.png"
const ProductManagerNavbar = () => {
    return (
        <div className="product-container">
            <h1 className="product-title">product Gabi!</h1>
            <div className="logo-container">
                <Image className="header-logo" src={pp} alt="Logo" />
            </div>
        </div>

    )
}

export default ProductManagerNavbar
