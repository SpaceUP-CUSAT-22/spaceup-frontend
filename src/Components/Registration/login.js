import './login.css';

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="left_container">
                    <img className='login_image' src='https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
                </div>
                <div className="right_container">
                    <div className='form-container'>
                        <form className='form_card'>
                            <h3>Sign In</h3>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                            <p className="forgot-password">
                                <a href="#">Forgot password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;