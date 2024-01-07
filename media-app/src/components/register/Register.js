import './register.css'

function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Facebook</h3>
                <span className='loginDesc'>Connect with friends and the world around you on Facebook.</span>
            </div>
            <div className='loginLeft'>
                <div className='loginBox'>
                    {/* <form> */}
                        <input placeholder='User Name' className='loginInput'/>
                        <input placeholder='Email' className='loginInput'/>
                        <input placeholder='Password' className='loginInput'/>        
                        <input placeholder='Again Password' className='loginInput'/>
                        <button className='loginButton'> Sign Up</button>
                        
                        <button className='loginRegisterButton'> Login into Account </button>
                    {/* </form> */}
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Register