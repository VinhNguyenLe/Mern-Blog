import { Fragment } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";

function Home() {
    return (
        <Fragment>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </Fragment>
    );
}

export default Home;
