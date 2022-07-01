import { useContext } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"

import Topbar from "./components/Topbar/Topbar"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Settings from "./pages/Settings/Settings"
import Single from "./pages/Single/Single"
import Write from "./pages/Write/Write"
import PageNotExits from "./pages/PageNotExits/PageNotExits"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { Context } from "./context/Context"
import About from "./pages/About/About"
function App() {
    const { user } = useContext(Context)
    return (
        <Router>
            <ScrollToTop>
                <Topbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/login"
                        element={user ? <Navigate to="/" replace /> : <Login />}
                    />

                    <Route
                        path="/register"
                        element={
                            user ? <Navigate to="/" replace /> : <Register />
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            !user ? (
                                <Navigate to="/login" replace />
                            ) : (
                                <Settings />
                            )
                        }
                    />
                    <Route
                        path="/write"
                        element={
                            !user ? <Navigate to="/login" replace /> : <Write />
                        }
                    />
                    <Route path="/post/:postId" element={<Single />} />

                    <Route path="404" element={<PageNotExits />} />

                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default App
