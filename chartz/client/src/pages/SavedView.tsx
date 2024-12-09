import { useEffect, useState } from "react";
import { searchOneSong } from "../api/itunes";
import Navbar from "../components/Navbar";
import SavedSong from "../components/SavedSong";
import { iTunesSong } from "../interfaces/iTunesResponse";
import './Pages.css';
import { getUsersSongs } from "../api/UserAPI";

interface song {
    id: number,
    geniusSongId: number,
    songTitle: string
}

function SavedView() {
    //SO we need to get the rows of songs attached to our user
    const [savedSongs, setSavedSongs] = useState<iTunesSong[]>([]);
    let userId: number = 0;
    let savedSongData: song[];
    //then we need to get the data on those rows

    async function getSongData() {
        let tempItunesArray: iTunesSong[] = await Promise.all(savedSongData.map(async (song) => {
            return await searchOneSong(song.songTitle);
        }));
        setSavedSongs(tempItunesArray);
    }

    function getId() {
        return Number(localStorage.getItem("Id"));
    }

    async function findSongs() {
        savedSongData = await getUsersSongs();
    }

    //and render them. 
    useEffect(() => {
        const fetchData = async () => {
            await findSongs();
            await getSongData();
        };
        fetchData();
        userId = getId();
    }, []);

    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    <div className="savedContainer">
                        <div className="savedItem">
                            <h1>Saved Songs</h1>
                            <div className="scrollContainer">
                                {savedSongs.length > 0 ? (
                                    <>
                                        {savedSongs.map((item) => (
                                            <SavedSong img={item.image100} title={item.title} artist={item.artist} key={savedSongs.indexOf(item)}></SavedSong>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                    <p>No songs saved!</p>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedView;