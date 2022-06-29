import { Link } from "react-router-dom"
import "./Sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img
                    src="https://c0.wallpaperflare.com/preview/977/745/97/ragdoll-cat-pet-hairy.jpg"
                    alt="SidebarImg"
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                    ducimus, vero qui porro nostrum fugiat quam delectus
                    reprehenderit in, eius quos voluptatibus, molestias ratione.
                    Optio eius illum obcaecati distinctio voluptatem!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-github-square"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
