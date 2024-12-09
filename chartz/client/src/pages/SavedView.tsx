import { useContext, useEffect, useState } from "react";
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
    // const { userId } = useContext(IdContext);
    let userId: number = 0;
    
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
            songTitle: "Sunday in the South"
        },
        {
            id: 5,
            geniusSongId: 2,
            songTitle: "Strangers Again"
        },
        {
            id: 2,
            geniusSongId: 20333,
            songTitle: "Please Don't Tell My Father That I Used His 1996 Honda Accord to Destroy the Town of Willow Grove, Pennsylvania in 2002"
        },
        {
            id: 22,
            geniusSongId: 30425,
            songTitle: "I Want to Know What Love Is"
        }
    ];
    //then we need to get the data on those rows

    async function getSongData() {
        let tempItunesArray: iTunesSong[] = await Promise.all(dummyData.map(async (song) => {
            return await searchOneSong(song.songTitle);
        }));
        setSavedSongs(tempItunesArray);
    }

    function getId() {
        return Number(localStorage.getItem("Id"));
    }

    async function findSongs() {
        await getUsersSongs();
    }

    //and render them. 
    useEffect(() => {
        const fetchData = async () => {
            await getSongData();
        };
        fetchData();
        userId = getId();
        findSongs();
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