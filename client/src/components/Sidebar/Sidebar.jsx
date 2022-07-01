import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./Sidebar.scss"

function Sidebar() {
    const [cats, setCats] = useState()

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img
                    src="https://c0.wallpaperflare.com/preview/977/745/97/ragdoll-cat-pet-hairy.jpg"
                    alt="SidebarImg"
                />
                <p>
                    Hello, I'm Vinh. Currently learning to create beautiful
                    thing. This website is incomplete so it is best used on
                    computers and 480px devices. I make this with Node.js,
                    ReactJS, ExpressJS and MongoDB from Lama Dev. Leave some
                    interesting things here and have a nice day.
                    <i>✧*｡٩(ˊᗜˋ*)و✧*｡</i>
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Interest</span>
                <ul className="sidebarList">
                    {cats &&
                        cats.map((item, index) => (
                            <li className="sidebarListItem" key={index}>
                                {item.name}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Contact</span>
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
