import React from 'react'
import PostIconOption from './PostIconOption'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './PostIcons.css';

function PostIcons() {
  return (
    <div className="postIcons">
        <PostIconOption Icon={ChatBubbleOutlineIcon} text={""}/>
        <PostIconOption Icon={RepeatIcon} text={""}/>
        <PostIconOption Icon={FavoriteBorderIcon} text={""}/>
        <PostIconOption Icon={PublishIcon} text={""}/>
    </div>
  )
}

export default PostIcons