import Topbar from "./components/Topbar/Topbar"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Settings from "./pages/Settings/Settings"
import Single from "./pages/Single/Single"
import Write from "./pages/Write/Write"
import PageNotExits from "./pages/PageNotExits/PageNotExits"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"

function App() {
    const currentUser = false
    return (
        <Router>
            <ScrollToTop>
                <Topbar user={currentUser} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Home />} />
                    <Route
                        path="/login"
                        element={
                            currentUser ? (
                                <Navigate to="/" replace />
                            ) : (
                                <Login />
                            )
                        }
                    />

                    <Route
                        path="/register"
                        element={
                            currentUser ? (
                                <Navigate to="/" replace />
                            ) : (
                                <Register />
                            )
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            !currentUser ? (
                                <Navigate to="/login" replace />
                            ) : (
                                <Settings />
                            )
                        }
                    />
                    <Route
                        path="/write"
                        element={
                            !currentUser ? (
                                <Navigate to="/login" replace />
                            ) : (
                                <Write />
                            )
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
