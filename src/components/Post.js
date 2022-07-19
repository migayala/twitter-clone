import "./Post.css";
import Miguel from './images/miguel.jpg';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import React, {forwardRef,} from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import PostIcons from "./PostIcons";


const options = [
    'Delete'
];
const ITEM_HEIGHT = 48;

const Post = forwardRef (({ id, displayName, username, verified, text, image, avatar}, ref) => {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
    setAnchorEl(null);
    };
    
    const deletePost = (_id) => {
        axios.delete(`http://localhost:8000/api/posts/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

        })
        .catch((err) => {
            console.log(err);
        });
    }

return (
    
    <div className="post" ref={ref}>
        <div className="post__avatar">
            <Avatar src= { Miguel } />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        { displayName }{" "} 
                        <span className="post__headerSpecial">
                        {verified && <VerifiedIcon className="post__badge" />} @
                        { username }</span>
                        <IconButton
                            className="post__iconButton"
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                            }}
                        >
                            {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Delete'} onClick={() => {deletePost();handleClose()}}>
                                {option}
                            </MenuItem>
                            ))}
                        </Menu>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img 
            src= { image }
            alt="" 
            />
            <div className="post__footer">
                <PostIcons />
            </div>
        </div>
    </div>
    );
});
export default Post