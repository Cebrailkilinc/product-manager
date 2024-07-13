import React from 'react'
import "./product-manager.scss"
import SideBar from '@/module/product-manager/component/sidebar/side-bar';
import AddProduct from '@/module/product-manager/component/add-product/add-product';
import ProductManagerNavbar from '@/packages/components/product-manager-header/navbar';
import Analysis from '@/packages/components/product-manager-analysis/analysis';

const ProductManagerLayout = () => {
    
    
    return (
        <div className="product-manager-layout">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="main-content">
                <ProductManagerNavbar/>
                <Analysis/>
                
            </div>
        </div>
    )
}

export default ProductManagerLayout
