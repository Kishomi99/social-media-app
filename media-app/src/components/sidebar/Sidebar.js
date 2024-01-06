import {RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} 
from '@mui/icons-material'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon'/>
            <span className='sibarListItemText'> Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon'/>
            <span className='sibarListItemText'> Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className='sibarListItemText'> Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon'/>
            <span className='sibarListItemText'> Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon'/>
            <span className='sibarListItemText'> Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon'/>
            <span className='sibarListItemText'> Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon'/>
            <span className='sibarListItemText'> Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon'/>
            <span className='sibarListItemText'> Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon'/>
            <span className='sibarListItemText'> Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu Ruban</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/tharsh.JPG' alt=''/>
            <span className='sidebarFriendName'> Tharshan</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/anu.JPG' alt=''/>
            <span className='sidebarFriendName'> Anujah Ravikumar</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu</span>
          </li>
          <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src='/assets/thanu.JPG' alt=''/>
            <span className='sidebarFriendName'> Thanu</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar