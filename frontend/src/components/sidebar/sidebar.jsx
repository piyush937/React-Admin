import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline , TrendingUp , PermIdentity  , Storefront , Paid , Email , Feedback , Message , Work , Report } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function sidebar() {
  return (
    <div className='Sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">DashBoard</h3>
             <ul className="sidebarList">
              <Link to='/home' className='link'>
              <li className="sidebarItems active">
              <LineStyle className='sidebarIcons' />
              Home
              </li>
              </Link>
            
             

             <li className="sidebarItems">
              <Timeline  className='sidebarIcons'/>
              Analytics
             </li>

             <li className="sidebarItems">
              <TrendingUp className='sidebarIcons' />
              Sales
             </li>
             </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
             <ul className="sidebarList">
              <Link to= '/userList' className='link'> 
              <li className="sidebarItems">
              <PermIdentity className='sidebarIcons' />
              User
             </li>
              </Link>
             
             <Link to='/products' className='link'>
             <li className="sidebarItems">
              <Storefront className='sidebarIcons'/>
              Products
             </li>
             </Link>
             

             <li className="sidebarItems">
              <Paid className='sidebarIcons'/>
              Transactions
             </li>
             </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
             <ul className="sidebarList">
              <li className="sidebarItems">
              <Email className='sidebarIcons' />
              Mail
             </li>

             <li className="sidebarItems">
              <Feedback className='sidebarIcons'/>
              Feedback
             </li>

             <li className="sidebarItems">
              <Message className='sidebarIcons'/>
              Messages
             </li>
             </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
             <ul className="sidebarList">
              <li className="sidebarItems">
              <Work className='sidebarIcons' />
              Manage
             </li>

             <li className="sidebarItems">
              <Timeline className='sidebarIcons'/>
              Analytics
             </li>

             <li className="sidebarItems">
              <Report className='sidebarIcons'/>
              Reports
             </li>
             </ul>
            </div>

        </div>
    </div>
  )
}
