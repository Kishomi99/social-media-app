import './online.css'

function Online({user}) {
    
  return (
    
          <li className='rightbarFriend'>
            <div className='rightbarFriendImgContainer'>
              <img className='rightbarFrinendImg' src={user.profilePicture} alt=""/>
              <span className='rightbaronline'> </span>
            </div>
            <span className='rightbarUserName'> {user.username}</span>
          </li>
          
    
  )
}

export default Online