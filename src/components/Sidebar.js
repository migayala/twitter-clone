import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import TwitterIcon from '@mui/icons-material/Twitter';
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
        <TwitterIcon className="sidebar__twitterIcon"/>
        
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