import Post from "../Post/Post"
import "./Posts.scss"

function Posts({ posts, search }) {
    const searchName = search.slice(search.indexOf("=") + 1)

    return (
        <div className="posts">
            <h1 className="postsTitle">
                All posts{searchName && <span> of: {searchName}</span>}
            </h1>
            <div className="postsWrapper">
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Posts
