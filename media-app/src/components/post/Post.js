import React,{useState} from 'react'
import './post.css'
import {MoreVert} from '@mui/icons-material'
import { Users} from '../../Dummy'

function Post({post}) {
    // const user = Users.filter(u=>
    // u.id===1)
    // console.log(user[0].username)
    const user= Users.filter((u) => u.id === post?.userId)

    const [dynamicLike,setDynamicLike]= useState(post.like)
    const [disLike,setDisLike]= useState(false)
    

    const clickLike =() =>{
        setDynamicLike(disLike ? dynamicLike-1 : dynamicLike+1)
        setDisLike(!disLike)
    }
    
    
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postTopLeftImg' src={user[0].profilePicture} alt=""/>
                    <span className='postUserName'> 
                    {user[0].username} 
                    </span>
                    <span className='postData'> {post.data}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert className='postTopRightIcon'/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post.desc} </span>
                <img className='postImg' src={post.photo} alt=""/>

            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='postLikeIcon' src='/assets/like.png' alt="" onClick={clickLike}/>
                    <img className='postLikeIcon' src='/assets/heart.png' alt="" onClick={clickLike}/>
                    <span className='postLikeCounter' >{dynamicLike} people liked it</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'> {post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post