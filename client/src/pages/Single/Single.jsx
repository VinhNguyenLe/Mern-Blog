import Sidebar from "../../components/Sidebar/Sidebar"
import SinglePost from "../../components/SinglePost/SinglePost"
import "./Single.scss"
function Single() {
    return (
        <div className="single">
            {/* post */}
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single
