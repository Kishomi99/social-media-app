import './post.css'
import {MoreVert} from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postTopLeftImg' src='/assets/kisho.JPG' alt=""/>
                    <span className='postUserName'> Kishomi</span>
                    <span className='postData'> 5 mis ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert className='postTopRightIcon'/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'> Hey! Its my first post:) </span>
                <img className='postImg' src="/assets/cover.jpg" alt=""/>

            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='postLikeIcon' src='/assets/like.png' alt=""/>
                    <img className='postLikeIcon' src='/assets/heart.png' alt=""/>
                    <span className='postLikeCounter'> 32 people liked it</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'> 9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post