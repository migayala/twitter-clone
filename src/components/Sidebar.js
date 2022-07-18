import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import HubIcon from '@mui/icons-material/Hub';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from './SidebarOption';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className="sidebar">
        <HubIcon className="sidebar__hubIcon"/>
        
        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={TagIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>

        <Button variant="outlined" className="sidebar__Tweet" fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar