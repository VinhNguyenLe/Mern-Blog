import "./PageNotExits.scss"
import { Link } from "react-router-dom"

function PageNotExits() {
    return (
        <div className="errorPage">
            <h1>Oops...</h1>
            <h3>We can’t find that page :’(</h3>
            <Link to="/">Click here to return to the homepage :3 </Link>
        </div>
    )
}

export default PageNotExits
