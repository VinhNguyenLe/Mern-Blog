import Sidebar from "../../components/Sidebar/Sidebar"
import "./Settings.scss"

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">
                        Update Your Account
                    </div>
                    <div className="settingsDeleteTitle">Delete Account</div>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://c4.wallpaperflare.com/wallpaper/33/74/524/cat-look-portrait-krasava-wallpaper-preview.jpg"
                            alt="img"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Your Name" />
                    <label>Email</label>
                    <input type="email" placeholder="Example@email.com" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                    <button className="settingsSubmit">Submit</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
