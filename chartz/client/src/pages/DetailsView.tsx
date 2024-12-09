import { useEffect, useState } from "react";
import { getGeniusSongData } from "../api/genius";
import Banner, { bannerProps } from "../components/Banner";
import Navbar from "../components/Navbar";
import './Pages.css';
import { GeniusSong } from "../interfaces/GeniusResponse";
import { searchOneSong } from "../api/itunes";
import { iTunesSong } from "../interfaces/iTunesResponse";
import { createNewSong } from "../api/UserAPI";
import { useLocation } from "react-router-dom";


function DetailsView() {
    let songInfo: iTunesSong = { title: "", album: "", artist: "" };
    const [songDetails, setSongDetails] = useState<GeniusSong>({ description: "", url: "", image: "" });
    const [props, setProps] = useState<bannerProps>({ img: "", songTitle: "", albumName: "", artistName: "" });
    const [id, setId] = useState<number>(0);
    const location = useLocation();
    const songTitle = location.state?.title;
    console.log(location.state?.songTitle);

    async function getSongData(songTitle: string) {
        //get the genius data
        let { returnData, songId } = await getGeniusSongData(songTitle);
        setId(songId);
        //get the itunes data
        songInfo = await searchOneSong(songTitle);
        //Set the props for the banner
        setSongDetails(returnData);

        setProps({
            img: returnData.image,
            songTitle: songInfo.title,
            albumName: songInfo.album,
            artistName: songInfo.artist
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            await getSongData(songTitle);
        };
        fetchData();
    }, []);

    async function saveSong() {
        await createNewSong(props.songTitle, id);
    }

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
                            <div className="lyricLink">
                                <a href={songDetails.url}>Click for lyrics!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="saveSong" onClick={saveSong}>Save Song</button>
            </div>
        </>
    );
}

export default DetailsView;