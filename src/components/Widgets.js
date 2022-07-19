import React, { useState} from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {

  return (
    <div className="widgets">
          <div className="widgets__input">
              <SearchIcon className="widgets__searchIcon" />
              <input 
                  placeholder="Search MegaPost" 
                  type="text" />
          </div>
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1322324767571992576"} />
            <TwitterTimelineEmbed className= "widgets__timeline"
            sourceType={"profile"}
            screenName={"kanyewest"}
            options={{ height: 400 }}
            />
            console.log({})
            <TwitterShareButton
            url={"codingdojo.com"}
            options={{ text: "#codingisawesome", via: "miguelayala"}}
            />
        </div>
    </div>
)
}

export default Widgets