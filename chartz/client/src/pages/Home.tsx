import Navbar from "../components/Navbar";
import Top10Item from "../components/Top10Item";
import Top3Item from "../components/Top3Item";
import './Pages.css';

function Home() {
    return (
        <>
            <div className="body">
                <Navbar></Navbar>
                {/*TOP 3 SONGS SECTION*/}
                <div>
                    <h1>Top 3 Songs</h1>
                    <div className="top3container">
                        <Top3Item></Top3Item>
                        <Top3Item></Top3Item>
                        <Top3Item></Top3Item>
                    </div>
                </div>
                {/*TOP 10 SONGS SECTION*/}
                <div>
                    <h1>Top 10 Songs</h1>
                    <div className="top10container">
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                        <Top10Item></Top10Item>
                    </div>
                </div>
                {/*RECENT VIEWS SECTION*/}
                <div>
                    <h1>Your Recent Views</h1>
                    {/*If they're logged in, show their recent views saved in local storage. If they are not, render message to log in. If there are no songs in local storage, render message they have to recently viewed.*/}
                </div>
            </div>
        </>
    );
}

export default Home;