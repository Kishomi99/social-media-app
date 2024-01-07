import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import {Users} from '../../Dummy'

function Rightbar({profile}) {
  const HomeRightBar =()=>{
    return(
      <>
      <div className='birthdayContainer'>
          <img  className='birthdayImg'  src="/assets/gift.png" alt=""/>
          <span className='birthdayText'>
            <b> Tharshan</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAdd' src="/assets/add.png" alt=""/>
        <h4 className='rightbarTitle'> Online Friends</h4>
        <ul className='rightbarFriendList'></ul>
          {Users.map((u) =>  
          (<Online key={u.id} user={u}/>))}
        <ul/>
      </>
    )

  }
  const ProfileRightBar = ()=>{
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbar'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>SriLanka</span>
          </div>
          <div className='rightbar'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Batticaloa</span>
          </div>
          <div className='rightbar'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friend</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/menan.jpg' alt=''/>
            <span className='rightbarFollowingUserName'>Itz Menan</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/kishomi.jpg' alt=''/>
            <span className='rightbarFollowingUserName'>Itz Kishomi</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/thanu.JPG' alt=''/>
            <span className='rightbarFollowingUserName'>Thanu Ruban</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/anu.JPG' alt=''/>
            <span className='rightbarFollowingUserName'>Anujah Ravikumar</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/tharsh.jpg' alt=''/>
            <span className='rightbarFollowingUserName'>Tharshan</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/parrot.jpg' alt=''/>
            <span className='rightbarFollowingUserName'>Thasitha</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='/assets/menan.jpg' alt=''/>
            <span className='rightbarFollowingUserName'>Itz Menan</span>
          </div>

        </div>
      </>
    )
  }
 
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        { profile ?<ProfileRightBar/> : <HomeRightBar/>}
      </div>
      

    </div>
  )
}

export default Rightbar