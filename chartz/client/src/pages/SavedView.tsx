import { useEffect, useState } from "react";
import { searchOneSong } from "../api/itunes";
import Navbar from "../components/Navbar";
import SavedSong from "../components/SavedSong";
import { iTunesSong } from "../interfaces/iTunesResponse";
import './Pages.css';

interface song {
    id: number,
    geniusSongId: number,
    songTitle: string
}

function SavedView() {
    //SO we need to get the rows of songs attached to our user
    const [savedSongs, setSavedSongs] = useState<iTunesSong[]>([]);
    const dummyData: song[] = [
        {
            id: 1,
            geniusSongId: 2,
            songTitle: "Shape of You"
        },
        {
            id: 4,
            geniusSongId: 20333,
            songTitle: "Apt."
        },
        {
            id: 20,
            geniusSongId: 30425,
            songTitle: "Sailor Song"
        },
        {
            id: 5,
            geniusSongId: 2,
            songTitle: "Shape of You"
        },
        {
            id: 2,
            geniusSongId: 20333,
            songTitle: "Apt."
        },
        {
            id: 22,
            geniusSongId: 30425,
            songTitle: "Sailor Song"
        }
    ];
    //then we need to get the data on those rows

    async function getSongData() {
        let tempItunesArray: iTunesSong[] = await Promise.all(dummyData.map(async (song) => {
            return await searchOneSong(song.songTitle);
        }));
        setSavedSongs(tempItunesArray);
    }

    //and render them. 
    useEffect(() => {
        const fetchData = async () => {
            await getSongData();
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(JSON.stringify(savedSongs));
    }, [savedSongs]);

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
                                        <SavedSong img={item.image100} title={item.title} artist={item.artist} onRemove={() => ("remove")} key={savedSongs.indexOf(item)}></SavedSong>
                                    ))}
                                    </>
                                ) : (<></>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedView;