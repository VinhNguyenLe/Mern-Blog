import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../context/Context"

import "./SinglePost.scss"

function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const { user } = useContext(Context)
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    const PF = "http://eblog-api-mern.herokuapp.com/images/"

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            })
            window.location.replace("/")
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            })
            // window.location.reload()
            setUpdateMode(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt="singlePostImg"
                        className="singlePostImg"
                    />
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: {""}
                        <b>
                            <Link
                                className="link"
                                to={`/?user=${post.username}`}
                            >
                                {post.username}
                            </Link>
                        </b>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        spellCheck={false}
                        className="singlePostTitleInput"
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i
                                    className="singlePostIcon far fa-edit"
                                    onClick={() => setUpdateMode(true)}
                                ></i>
                                <i
                                    className="singlePostIcon far fa-trash-alt"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>
                )}

                {updateMode ? (
                    <textarea
                        className="singPostDescInput"
                        value={desc}
                        rows="4"
                        spellCheck={false}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                    <div className="singlePostButtonWrap">
                        <button
                            className="singlePostButton"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SinglePost
