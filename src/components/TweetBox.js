import React, {useState} from 'react'
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Miguel from './images/miguel.jpg'
import axios from 'axios';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [errors, setErrors] = useState({});
  

    const sendTweet = (e) => {
        // e.preventDefault();
        const newpost = {displayName: 'Miguel Ayala', username: 'miguelayala', verified: 'true', text: tweetMessage, image: tweetImage, avatar: Miguel};
        axios.post("http://localhost:8000/api/posts", newpost)
            .then(res =>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                }
                
            }).catch(err => console.log(err));
            setTweetMessage("");
            setTweetImage("");
    }

return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar alt="Miguel Ayala" src={ Miguel } />
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text" 
                /> 
            </div>
            <input 
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox_imageInput" 
            placeholder="Optional: Enter image URL" 
            type="text" /> 
            <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton" value="Post" >Tweet</Button>
        </form>
    </div>
)
}

export default TweetBox