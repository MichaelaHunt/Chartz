import { useEffect, useState } from "react";
import { getGeniusSongData } from "../api/genius";
import Banner, { bannerProps } from "../components/Banner";
import Navbar from "../components/Navbar";
import './Pages.css';
import { GeniusSong } from "../interfaces/GeniusResponse";
import { searchOneSong } from "../api/itunes";
import { iTunesSong } from "../interfaces/iTunesResponse";



function DetailsView() {
    let songInfo: iTunesSong = { title: "", album: "", artist: "" };
    const [songDetails, setSongDetails] = useState<GeniusSong>({ description: "", url: "", image: "" });
    const [props, setProps] = useState<bannerProps>({ img: "", songTitle: "", albumName: "", artistName: "" });
    let songTitle: string;

    //TODO: SongTitle needs to be initialized when the user clicks on the songs in Home.tsx or Saved.tsx
    async function getSongData(songTitle: string) {
        //get the genius data
        let details = await getGeniusSongData(songTitle);
        //get the itunes data
        songInfo = await searchOneSong(songTitle);
        //Set the props for the banner
        setSongDetails(details);

        setProps({ 
            img: details.image, 
            songTitle: songInfo.title, 
            albumName: songInfo.album, 
            artistName: songInfo.artist });
    }

    useEffect(() => {
        const fetchData = async () => {
            await getSongData(songTitle);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <Banner {...props}></Banner>
                <div className="body">
                    {/*lyrics section here*/}
                    <div className="lyricsContainer">
                        <div className="lyricsItem">
                            <p>{songDetails.description}</p>
                            <a href={songDetails.url}>Lyrics</a>
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

export default DetailsView;