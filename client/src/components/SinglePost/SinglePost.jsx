import "./SinglePost.scss"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/87/632/856/cat-flowers-daisy-bliss-wallpaper-preview.jpg"
                    alt="singlePostImg"
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Vinh</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde fugiat illo, quaerat officia ut iure iste, qui eius
                    ipsa magnam, illum exercitationem eum voluptas alias est
                    cumque dignissimos deserunt quia. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Unde fugiat illo,
                    quaerat officia ut iure iste, qui eius ipsa magnam, illum
                    exercitationem eum voluptas alias est cumque dignissimos
                    deserunt quia. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Unde fugiat illo, quaerat officia ut iure
                    iste, qui eius ipsa magnam, illum exercitationem eum
                    voluptas alias est cumque dignissimos deserunt quia.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
