import { useEffect, useState } from "react"
import axios from "axios"
import request from "../../utils/request"

import "./About.scss"
function About() {
    const [cats, setCats] = useState()

    useEffect(() => {
        const getCats = async () => {
            const res = await request.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="about">
            <div className="aboutItem">
                <span className="aboutTitle">About me</span>
                <img
                    src="https://c0.wallpaperflare.com/preview/977/745/97/ragdoll-cat-pet-hairy.jpg"
                    alt="aboutImg"
                />
                <p>
                    Hello, I'm Vinh. Currently learning to create beautiful
                    thing. This website is incomplete so it is best used on
                    computers. I make this with Node.js, ReactJS, ExpressJS and
                    MongoDB from Lama Dev. Leave some interesting things here
                    and have a nice day.
                    <i>✧*｡٩(ˊᗜˋ*)و✧*｡</i>
                </p>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">Interest</span>
                <ul className="aboutList">
                    {cats &&
                        cats.map((item, index) => (
                            <li className="aboutListItem" key={index}>
                                {item.name}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">Contact</span>
                <div className="aboutSocial">
                    <i className="aboutIcon fab fa-facebook-square"></i>
                    <i className="aboutIcon fab fa-instagram-square"></i>
                    <i className="aboutIcon fab fa-github-square"></i>
                    <i className="aboutIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}

export default About
