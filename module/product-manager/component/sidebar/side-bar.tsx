import React from 'react'
import "./side-bar.scss"
import { LayoutDashboard, Package2, Settings } from 'lucide-react'
import logo from "../../assets/logo.jpg"
import Image from 'next/image'
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        {/* <Image className="header-logo" src={logo} alt="Logo" /> */}
        <h1 className="header-title">Product Manager</h1>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Package2 color='#11ABC2' />
          <h1 className='sidebar-item-name' >Add Product</h1>
        </li>
        <li className="sidebar-item">
          <LayoutDashboard color='#11ABC2' />
          <h1 className='sidebar-item-name' >Add Product</h1>
        </li>
        <li className="sidebar-item">
          <Settings color='#11ABC2' />
          <h1 className='sidebar-item-name' >Add Product</h1>
        </li>
      </ul>
    </div>

  )
}

export default SideBar
