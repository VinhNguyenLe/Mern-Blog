import "./Login.scss"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
            <div className="loginToRegister">
                <span>
                    You don't have account?
                    <Link to="/register" className="loginRegisterLink">
                        Register
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Login
