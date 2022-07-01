import { Fragment, useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Home.scss"

function Home() {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    return (
        <Fragment>
            <Header />
            <div className="home">
                <Posts posts={posts} search={search} />
                <Sidebar />
            </div>
        </Fragment>
    )
}

export default Home
