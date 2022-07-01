import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "./Register.scss"

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login")
        } catch (error) {
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your Name..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    className="registerInput"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">
                    Register
                </button>
                {error && (
                    <span
                        style={{
                            textAlign: "center",
                            color: "red",
                            fontWeight: 600,
                            marginTop: 12,
                        }}
                    >
                        Something went wrong!!
                    </span>
                )}
            </form>
            <div className="registerToLogin">
                <span>
                    You have account?
                    <Link to="/login" className="loginRegisterLink">
                        Login
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Register
