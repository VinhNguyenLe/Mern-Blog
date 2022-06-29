import { Link } from "react-router-dom"
import "./Post.scss"

function Post({ img }) {
    return (
        <div className="post">
            <img src={img} alt="postImg" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        Some picture about Ragdoll cat
                    </Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                libero, nam eius, reprehenderit hic odit deserunt corporis
                voluptate deleniti aut repellat quas dolorum corrupti culpa
                temporibus qui, nemo dicta atque. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ipsa libero, nam eius,
                reprehenderit hic odit deserunt corporis voluptate deleniti aut
                repellat quas dolorum corrupti culpa temporibus qui, nemo dicta
                atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ipsa libero, nam eius, reprehenderit hic odit deserunt corporis
                voluptate deleniti aut repellat quas dolorum corrupti culpa
                temporibus qui, nemo dicta atque.
            </p>
        </div>
    )
}

export default Post
