import Post from "../Post/Post"
import "./Posts.scss"

const imgLinks = [
    "https://c4.wallpaperflare.com/wallpaper/236/720/984/cat-mammal-fluffy-cat-blue-eyes-wallpaper-preview.jpg",
    "https://wallpapercave.com/dwp1x/wp3754109.jpg",
    "https://wallpapercave.com/dwp1x/wp3754118.jpg",
    "https://wallpapercave.com/dwp1x/wp3754125.jpg",
    "https://wallpapercave.com/dwp1x/wp3754134.jpg",
    "https://wallpapercave.com/dwp1x/wp3754140.jpg",
    "https://wallpapercave.com/dwp1x/wp3754151.jpg",
    "https://wallpapercave.com/dwp1x/wp3754158.jpg",
]
function Posts() {
    return (
        <div className="posts">
            <div className="postsWrapper">
                {imgLinks.map((imgLink) => (
                    <Post img={imgLink} />
                ))}
            </div>
        </div>
    )
}

export default Posts
