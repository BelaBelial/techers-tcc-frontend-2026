import "./styles/login.css";
import { Link } from "react-router-dom";

export function Login(){

    return (
        <div className="login-page">
            <div className="form-container">
                <h1>Log In To Your Account</h1>
                <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
                    <div className="data-container">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="fillin" name="username" placeholder="Type in your Username"/>
                    </div>
                    <div className="data-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="fillin" name="password" placeholder="Enter your password"/>
                    </div>
                    <div className="adendos">
                        <span>Don't have an account?</span>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <input type="submit" className="sub-but" value="Log In"/>
                </form>
            </div>
        </div>
    );
}