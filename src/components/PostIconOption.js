import React, {useState} from 'react'
import './PostIconOption.css';

function PostIconOption (props) {
    const [text, setText] = useState(null)
    const [Icon, setIcon] = useState(props.Icon)
          
  return (
    <div className={'postIcon'}>
        <div className="postIconOption">
            <Icon onClick={ (event) => setText(text + 1)} className="postIconOption__icon"/>
            <span>{text}</span>
        </div>
    </div>
  )
}

export default PostIconOption