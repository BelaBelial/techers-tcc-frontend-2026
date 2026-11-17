import "./styles/login.css";
import { Link } from "react-router-dom";
export function Signup(){

    return (
        <div className="login-page">
            <div className="form-container">
                <h1>Create An Account</h1>
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
                        <span>Already have an account?</span>
                        <Link to="/login">Log In</Link>
                    </div>
                    <input type="submit" className="sub-but" value="Sign Up"/>
                </form>
            </div>
        </div>
    );
}