import { useEffect } from "react";
import { getGeniusSongData } from "../api/genius";
import Banner, { bannerProps } from "../components/Banner";
import Navbar from "../components/Navbar";
import './Pages.css';



let songInfo: bannerProps;
function LyricsView() {
    //get the itunes data for the specified song, and get the genius data for the song.
    //remember that any functions from the api folder will need an await before them.
    useEffect(() => {console.log("Returned value: " + getGeniusSongData("Shape of you"));}, []);
    
    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <Banner {...songInfo}></Banner>
                <div className="body">
                    {/*lyrics section here*/}
                    <div className="lyricsContainer">
                        <div className="lyricsItem">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="saveSong">
                    <button>Save Song</button>
                </div>
            </div>
        </>
    );
}

export default LyricsView;