import { useContext, useRef, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import request from "../../utils/request"

import { Context } from "../../context/Context"
import "./Login.scss"

function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(false)

    const { dispatch, isFecthing } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await request.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
            setError(true)
        }
    }

    console.log(isFecthing)
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button
                    className="loginButton"
                    type="submit"
                    disabled={isFecthing}
                >
                    Login
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
                        Wrong username or password, please try again!!
                    </span>
                )}
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
