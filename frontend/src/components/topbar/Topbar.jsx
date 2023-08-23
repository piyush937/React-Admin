import React from 'react'
import "./topbar.css"
import { NotificationsNone , Language , Settings} from '@mui/icons-material';
import topBarImage10 from '../../components/Img/Image10.png';
export default function Topbar() {
  return (
    <div className='topbar'> 
    <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">AdminCentral</span>
            </div>
        <div className="topRight">
            <div className="topbarIconContainer">                 
            <NotificationsNone /> 
            <span className="topIconBadge">2</span>  
            </div>

            <div className="topbarIconContainer">                 
            <Language /> 
              
            </div>

            <div className="topbarIconContainer">                 
            <Settings /> 
              
            </div>
            <img src={ topBarImage10 } alt="" className="topAvatar" />
        </div>
    </div>
    </div>
  )
}
