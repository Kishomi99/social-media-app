import './profile.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'


function Profile() {
    
  return (
    <>
        <Topbar/>
        <div className='profile'>
          <Sidebar/>
          <div className='profileRight'>
            <div className='profileRightTop'>
                <div className='profileCover'>
                    <img className='profileCoverImg' src="/assets/c1.jpg" alt="" />
                    <img className='profileUserImg' src="/assets/kisho.JPG" alt="" />
                </div>
                <div className='profileInfo'>
                    <h4 className='profileInfoName'>Kishomi</h4>
                    <span className='profileInfoDescription'>Hello Iam kishomi  </span>
                </div>
                
            </div>
            <div className='profileRightBottom'>
                <Feed/>
                <Rightbar profile/>
            </div>            
          </div> 
        </div>
    </>
  )
}

export default Profile