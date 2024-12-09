import "./Components.css";
import { useState, useEffect } from "react";

interface SavedSongProps {
    img?: string;
    title: string;
    artist: string;
}

function SavedSong({ img, title, artist}: SavedSongProps) {

    const [songTitle, setSongTitle] = useState<string>(title);

    function removeSong() {
        
    }

    useEffect(() => {
        //truncate the title to necessary length
        let tempTitle = title;
        let authorMark = " - " + artist;
        //First, let's remove the artist's name from the page. 
        if (title.includes(authorMark)) {
            tempTitle = title.slice(0, (title.length - authorMark.length));
        }
        //Then let's remove any (feat. ****)
        tempTitle = tempTitle.replace(/\s?\(.*?\)\s?/g, '');
        //Finally, let's make sure the length with be appropriate when considering title and artist.
        let totalLength = (tempTitle.length + artist.length);
        
        //so if it's greater than 80, reduce it so that it will be.
        let desiredLength = 55 - artist.length;
        
        if (totalLength > 55) {
            tempTitle = tempTitle.slice(0, desiredLength) + "...";
        }

        setSongTitle(tempTitle);
        
    }, []);

    return (
        <>
            <div className="savedSongItem" id="bringToDetailsPg">
                <div>
                    <img src={img} alt={songTitle}></img>
                    <h3>{songTitle}</h3>
                    <h3 className="spacer">|</h3>
                    <h3>{artist}</h3>
                </div>
                <button onClick={removeSong} className="removeButton"><i className="fa-solid fa-trash"></i></button>
            </div>
        </>
    );
}

export default SavedSong;