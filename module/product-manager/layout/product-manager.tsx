"use client"
import React, { useState } from 'react'
import "./product-manager.scss"
import SideBar from '@/packages/components/product-manager/sidebar/side-bar';
import AddProduct from '@/module/product-manager/component/add-product/add-product';
import ProductManagerNavbar from '@/packages/components/product-manager/product-manager-header/navbar';
import Analysis from '@/packages/components/product-manager/product-manager-analysis/analysis';
import ProductList from '../component/product-list/product-list';
import TopBar from '@/packages/components/product-manager/topbar/top-bar';

const ProductManagerLayout = () => {

  const [selectedMenu, setSelectedMenu] = useState('add-product');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'add-product':
        return <AddProduct />;
      case 'product-list':
        return <ProductList />;
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
        <ProductManagerNavbar />
        <Analysis />
        <div className="topbar">
          <TopBar onSelectMenuItem={setSelectedMenu} />
        </div>
        {renderContent()}
      </div>

    </div>
  )
}

export default ProductManagerLayout
