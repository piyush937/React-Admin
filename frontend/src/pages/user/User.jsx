import React from 'react'
import './user.css'
import Image13 from '../../components/Img/image13.jpg'

import {LocationSearching,CalendarToday, MailLockOutlined, PermIdentity, PhoneAndroid , Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
    <div className="userTitleContainer">
        <h1 className="usertitle">Edit User</h1>
        <Link to='/newUser'>
        <button className="userAddButton">Create</button>
        </Link>
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src={Image13} alt="" className="userShowImage" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName"> Aditya Sangwan</span>
                    <span className="userShowUserTitle">Architect</span>
                </div>
            </div>
            <div className="userShowBottom">
               <span className="userShowTitle">Acount Detail</span>
               <div className="userShowInfo">
               <PermIdentity  className='userShowIcon'/>
            <span className="userShowInfoTitle">sangwan99</span>
               </div>

               <div className="userShowInfo">
               <CalendarToday className='userShowIcon'/>
            <span className="userShowInfoTitle">27.10.2002</span>
               </div>
            
               <span className="userShowTitle">Contact Detail</span>
               <div className="userShowInfo">
               <PhoneAndroid  className='userShowIcon'/>
            <span className="userShowInfoTitle">+97772642</span>
               </div>

               <div className="userShowInfo">
               <MailLockOutlined  className='userShowIcon'/>
            <span className="userShowInfoTitle">sangwan99@gmail.com</span>
               </div>

               <div className="userShowInfo">
               <LocationSearching  className='userShowIcon'/>
            <span className="userShowInfoTitle">Rohini Sector-5</span>
               </div>
           
            </div>
        </div>
        <div className="userUpdate">
           <span className="userUpdateTitle">Edit</span> 
           <form  className="userUpdateForm">
            <div className="userUpdateLeft">
               <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" 
                placeholder='sangwan99'
                className='userUpdateInput' />
               </div>

               <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" 
                placeholder='Aditya Sangwan'
                className='userUpdateInput' />
               </div>

               <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" 
                placeholder='sangwan99@gmail.com'
                className='userUpdateInput' />
               </div>

               <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" 
                placeholder='+97772642'
                className='userUpdateInput' />
               </div>

               <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" 
                placeholder='Rohini Sector-5'
                className='userUpdateInput' />
               </div>
            </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img className='userUpdateImg' src= {Image13} alt="" />
                    <label htmlFor="file"> <Publish  className='userUpdateIcon'/> </label>
                    <input type="file" id='file' style={{display: 'none'}} />
                    </div> 
                    <button className="userUpdateButton">Update</button> 
            </div>
           </form>
        </div>
    </div>
    </div>
  )
}
