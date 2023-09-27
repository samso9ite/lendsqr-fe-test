const Login = () => {
    const formStyle = {
        display: 'initial'
    }
    return(
        <>
            <div className="container-fluid split-container">
            <div className="left-half">
                <div>
                    <img src={process.env.PUBLIC_URL+'/assets/SVGS/logo.svg'} style={{paddingLeft: '7%', marginTop: '-5rem'}}/>
                    <img src={process.env.PUBLIC_URL+'/assets/loginImg.png'}  className="mt-4"/>
                </div>
            </div>
            <div className="right-half">
                <div>
                    <h3 style={{fontSize: '40px', fontWeight: '700'}}>Welcome!</h3>
                    <p>Enter details to login.</p>
                    <form style={formStyle}>
                        <input type="text" className="form-control" style={formStyle} placeholder="Email" />
                        <input type="password" className="form-control mt-4" placeholder="Password" style={formStyle}/>
                        <p style={{color: '#39CDCC', fontWeight: '500', fontSize: '12px'}} className="mt-4">FORGOT PASSWORD?</p>
                        <button type="submit" className="btn btn-primary btn-large" style={{width: '100%'}}>LOG IN</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login