import "./Header.scss"

function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node Blog</span>
                <span className="headerTitleLg">
                    Let's write something useful with English{" "}
                </span>
            </div>
            <img
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="HeaderImg"
                className="headerImg"
            />
        </div>
    )
}

export default Header
