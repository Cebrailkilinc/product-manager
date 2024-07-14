"use client"
import React, { useState } from 'react'
import "./product-manager.scss"
import SideBar from '@/module/product-manager/component/sidebar/side-bar';
import AddProduct from '@/module/product-manager/component/add-product/add-product';
import ProductManagerNavbar from '@/packages/components/product-manager-header/navbar';
import Analysis from '@/packages/components/product-manager-analysis/analysis';

const ProductManagerLayout = () => {
    
    const [selectedMenu, setSelectedMenu] = useState('add-product');

    const renderContent = () => {
        switch (selectedMenu) {
          case 'add-product':
            return <AddProduct/>;
          case 'product-analysis':
            return <div>Product Analysis Content</div>;
          case 'settings':
            return <div>Settings Content</div>;
          default:
            return <div>Welcome to Product Manager</div>;
        }
      };

    return (
        <div className="product-manager-layout">
            <div className="sidebar">
                <SideBar onSelectMenuItem={setSelectedMenu} />
            </div>
            <div className="main-content">
                <ProductManagerNavbar/>
                <Analysis/>  
                 {renderContent()}            
            </div>
        </div>
    )
}

export default ProductManagerLayout