import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./Topbar.scss"
function Topbar() {
    const { user, dispatch } = useContext(Context)
    const PF = "http://eblog-api-mern.herokuapp.com/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-github-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="topListItem customMQ">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write">Write</Link>
                    </li>
                    {user && (
                        <li className="topListItem" onClick={handleLogout}>
                            LOGOUT
                        </li>
                    )}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={PF + user.profilePic}
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Topbar
