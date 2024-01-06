import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img className='shareProfileImg' src='/assets/kisho.JPG' alt=''/>
                <input placeholder="What's in your mind Kishomi?" className='shareInput' type='test' />
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptiontext'>Photo or Vedio</span>
                    </div>
                    <div className='shareOption'>
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptiontext'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareOptiontext'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptiontext'>Feelings</span>
                    </div>
                    <buttont className='shareButton'>Share</buttont>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Share