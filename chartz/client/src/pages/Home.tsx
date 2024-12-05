import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Top10Item from "../components/Top10Item";
import Top3Item from "../components/Top3Item";
import './Pages.css';
import { retrieveTrendingSongs, searchOneSong } from "../api/itunes";
// import "../components/Components.css";

function Home() {
    //get the data for the 10trending, none else. 
    useEffect(() => {console.log("Returned value: " + searchOneSong("Shape of You"));}, []);
    
    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    {/*TOP 3 SONGS SECTION*/}
                    <div>
                        <h1 className="first sectionTitle">Top 3 Songs</h1>
                        <div className="top3container">
                        <Top3Item img="img1.jpg" title="Song 1" artist="Artist 1" rank={1} />
                        <Top3Item img="img1.jpg" title="Song 1" artist="Artist 1" rank={1} />
                        <Top3Item img="img1.jpg" title="Song 1" artist="Artist 1" rank={1} />
                        </div>
                    </div>
                    {/*TOP 10 SONGS SECTION*/}
                    <div>
                        <h1 className="sectionTitle">Top 10 Songs</h1>
                        <div className="top10container">
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                            <Top10Item img="img10.jpg" title="Song" artist="Artist"></Top10Item>
                        </div>
                    </div>
                    {/*RECENT VIEWS SECTION*/}
                    <div>
                        <h1 className="sectionTitle">Your Recent Views</h1>
                        {/*If they're logged in, show their recent views saved in local storage. If they are not, render message to log in. If there are no songs in local storage, render message they have to recently viewed.*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;