import { Link } from "react-router-dom"
import { PFs } from "../../utils/PFs"
import "./Post.scss"

function Post({ post }) {
    const PF = PFs

    return (
        <div className="post">
            <img src={PF + post.photo} alt="postImage" className="postImg" />

            <div className="postInfo">
                {/* <div className="postCats">
                    {post.categories.map((item) => (
                        <span className="postCat">
                            <Link
                                className="link"
                                to={`/posts?cat=${item.name}`}
                            >
                                {item.name}
                            </Link>
                        </span>
                    ))}
                </div> */}
                <span className="postTitle">
                    <Link to={`/post/${post._id}`} className="link">
                        {post.title}
                    </Link>
                </span>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}

export default Post
