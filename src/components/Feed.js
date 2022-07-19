import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios
          .get("http://localhost:8000/api/posts")
          .then((response) => {
          console.log(response.data);
          setPosts(response.data);
          })
          .catch((err) => {
          console.log(err.response);
          });
  },[]);

  return (
    <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        
        <TweetBox />
        
        <FlipMove>
        {posts.map((posts, index) => (
          <Post 
          key={index}
          displayName = {posts.displayName}
          username={posts.username}
          verified={posts.verified}
          text={posts.text}
          avatar={posts.avatar}
          image={posts.image}
          id={posts._id}
          />
        ))}
        </FlipMove>
    </div>
  );
}

export default Feed;