import React from 'react'
import Logo from '../../Photos/Logo.png'
import Button from 'react-bootstrap/Button';
import Dropdown from '../dropDownNav/NavDropDown';
import "./Navbar.css"
import {MenuOutlined,ShoppingOutlined} from "@ant-design/icons"
function Navbar() {
  return (
    <>
    <nav className="navbar">
      <a href="" className="logo">
       <img src={Logo} alt="" />
      </a>
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler"><MenuOutlined id='icon'/></label>
      <div className="menu">
        <ul className="list">
          <li><a href=""><Dropdown/></a></li>
          <li><a href="">Sustainability</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">  <ShoppingOutlined id='icon' /> Cart (0)</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
