import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import { image1} from '../../Images/'

function SignIn() {
    return (
        <>
            <div className="main-body">
                <div className="btn">
                    <button className="nav_btns" style={{ marginRight: "4px" }}>SignIn</button>
                    <button className="nav_btns">SignUp</button>
                </div>
                <div className="row">
                    <div className="contact-info">
                        <h3>Use the account below to login</h3>
                        <form className="contact">
                            <input type="text" placeholder="Username" /><br />
                            <input type="password" placeholder="Password" /><br />
                            <button className="login-btn">Login</button><br />
                            <div className="register-link">
                                <a href="#" style={{ color: "blue" }}>Forget Password?</a><br />
                                <a href="#" style={{ color: "black" }}>Register with an Email?</a><br />
                            </div>
                            <button className="signup-btn">
                                <a href="www.facebook.com">SignUp for New Account</a></button><br />
                            {/* <button className="google-btn">
                            <a href="www.google.com">Login with Google</a></button><br /> */}
                        </form>
                    </div>

                    <div className="contain">

                        <p>
                            In case you arae facing any problem while logging in or need more
                            information about how to navigate through the application, you may
                            contact us by going
                     <a href="#contact" style={{ color: "black" }}>contact us</a> page.
                     </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;