import './closefriend.css'

function Closefriend({user}) {
  return (
    <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src={user.profilePicture} alt=''/>
            <span className='sidebarFriendName'> {user.username}</span>
    </li> 
  )
}

export default Closefriend