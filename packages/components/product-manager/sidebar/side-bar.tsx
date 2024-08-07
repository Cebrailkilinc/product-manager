"use client"; // Client Component olarak belirtir

import React, { useState } from 'react';
import "./side-bar.scss";
import { LayoutDashboard, Package2, Settings } from 'lucide-react';
import classNames from 'classnames';
import { constants } from 'buffer';
import Switch from '@/core/components/switch/switch';


interface SideBarProps {
  onSelectMenuItem: (menu: string) => void
}

const SideBar: React.FC<SideBarProps> = ({ onSelectMenuItem }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Add Product");

  const handleSelectMenuItem = (constant: string, name: string,) => {
    onSelectMenuItem(constant);
    setSelectedItem(name)
  };

  const menuItems = [
    { name: 'Add Product', icon: <Package2 color='#11ABC2' />, constant: "add-product" },
    { name: 'Product Analiz', icon: <LayoutDashboard color='#11ABC2' />, constant: "product-list" },
    { name: 'Settings', icon: <Settings color='#11ABC2' />, constant: "add-products" },
  ];

  return (
    <div className="sidebar">
      <div className="header">
        <h1 className="header-title">Product Manager</h1>
      </div>
      <ul className="sidebar-menu">
        {menuItems && menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelectMenuItem(item.constant, item.name)}
            className={classNames('sidebar-item', {
              'selected': selectedItem === item.name
            })}
          >
            {item.icon}
            <h1 className='sidebar-item-name'>{item.name}</h1>
          </li>
        ))}
      </ul>
      <div className='dark-light-mode'>
        
      </div>
    </div>
  );
}

export default SideBar;
