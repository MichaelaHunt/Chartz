import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Top10Item from "../components/Top10Item";
import Top3Item from "../components/Top3Item";
import './Pages.css';
import { retrieveTrendingSongs } from "../api/itunes";
import { iTunesTrendingSong } from "../interfaces/iTunesResponse";
import "../components/Components.css";

function Home() {
    //get the data for the 10trending, none else. 
    const [songs, setSongs] = useState<iTunesTrendingSong[]>([]);

    useEffect(() => {
        const fetchSongs = async () => {
           let song: iTunesTrendingSong[] = await retrieveTrendingSongs();
              setSongs(song);
        };
        fetchSongs();
    }, []);

    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    {/*TOP 3 SONGS SECTION*/}
                    <div>
                        <h1 className="first sectionTitle">Top 3 Songs</h1>
                        <div className="top3container">
                            {!songs.length ? (
                                <div>Songs loading</div>
                            ) : (
                            <>
                                <Top3Item img={songs[0].image170} title={songs[0].title} artist={songs[0].artist} rank={1} />
                                <Top3Item img={songs[1].image170} title={songs[1].title} artist={songs[1].artist} rank={2} />
                                <Top3Item img={songs[2].image170} title={songs[2].title} artist={songs[2].artist} rank={3} />
                            </>
                            )}     
                        </div>
                    </div>
                    {/*TOP 10 SONGS SECTION*/}
                    <div>
                        <h1 className="sectionTitle">Top 10 Songs</h1>
                        <div className="top10container">
                        {!songs.length ? (
                                <div>Songs loading</div>
                            ) : (
                            <>
                                <Top10Item img={songs[0].image60} title={songs[0].title} artist={songs[0].artist} rank={songs[0].rank}></Top10Item>
                                <Top10Item img={songs[1].image60} title={songs[1].title} artist={songs[1].artist} rank={songs[1].rank}></Top10Item>
                                <Top10Item img={songs[2].image60} title={songs[2].title} artist={songs[2].artist} rank={songs[2].rank}></Top10Item>
                                <Top10Item img={songs[3].image60} title={songs[3].title} artist={songs[3].artist} rank={songs[3].rank}></Top10Item>
                                <Top10Item img={songs[4].image60} title={songs[4].title} artist={songs[4].artist} rank={songs[4].rank}></Top10Item>
                                <Top10Item img={songs[5].image60} title={songs[5].title} artist={songs[5].artist} rank={songs[5].rank}></Top10Item>
                                <Top10Item img={songs[6].image60} title={songs[6].title} artist={songs[6].artist} rank={songs[6].rank}></Top10Item>
                                <Top10Item img={songs[7].image60} title={songs[7].title} artist={songs[7].artist} rank={songs[7].rank}></Top10Item>
                                <Top10Item img={songs[8].image60} title={songs[8].title} artist={songs[8].artist} rank={songs[8].rank}></Top10Item>
                                <Top10Item img={songs[9].image60} title={songs[9].title} artist={songs[9].artist} rank={songs[9].rank}></Top10Item>
                            </>
                            )}
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