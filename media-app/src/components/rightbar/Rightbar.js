import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import {Users} from '../../Dummy'

function Rightbar() {
 
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
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
      </div>
      

    </div>
  )
}

export default Rightbar