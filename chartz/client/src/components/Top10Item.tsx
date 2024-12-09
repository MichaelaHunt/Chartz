import { useEffect, useState } from "react";
import "./Components.css";

interface Top10ItemProps {
    img: string;
    title: string;
    artist: string;
    rank: string | number;
}

function Top10Item({ img, title, artist, rank }: Top10ItemProps) {
    const [songTitle, setSongTitle] = useState<string>(title);
    useEffect(() => {
        //truncate the title to necessary length
        let tempTitle = title;
        let authorMark = " - " + artist;
        if (title.includes(authorMark)) {
            tempTitle = title.slice(0, (title.length - authorMark.length));
        }
        //Then let's remove any (feat. ****)
        tempTitle = tempTitle.replace(/\s?\(.*?\)\s?/g, '');
        if (tempTitle.length > 40) {
            tempTitle = title.slice(0, 40) + "...";
        }

        setSongTitle(tempTitle);
        
    }, []);

    return (
        <>
            <div className="top10item">
                <h1>{rank}</h1>
                <div id="bringToDetailsPg">
                    <img src={img} alt={songTitle} className="top10img"></img>
                    <div>
                        <h6 className="top10text">{songTitle}</h6>
                        <h6 className="top10text">{artist}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Top10Item;