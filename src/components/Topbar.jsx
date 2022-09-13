import React from 'react'
import Logo from '../assets/images/Logo.webp'
import ProfilUser from '../assets/images/profilUserDefault.png'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={Logo} alt="logo" className="Logo" />
          <span>Admin-Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={ProfilUser} alt="profilPic" className='topAvatar' />
        </div>
      </div>
    </div>
  );
}
