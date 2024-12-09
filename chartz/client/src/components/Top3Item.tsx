import { useEffect, useState } from "react";
import "./Components.css";

interface Top3ItemProps {
    img: string;
    title: string;
    artist: string;
    rank: number;
    onClick: () => void; // onClick prop
}

function Top3Item({ img, title, artist, rank, onClick }: Top3ItemProps) {
    const [songTitle, setSongTitle] = useState<string>(title);

    useEffect(() => {
        // Truncate the title to necessary length
        let tempTitle = title;
        let authorMark = " - " + artist;
        if (title.includes(authorMark)) {
            tempTitle = title.slice(0, title.length - authorMark.length);
        }
        // Remove any (feat. ****)
        tempTitle = tempTitle.replace(/\s?\(.*?\)\s?/g, '');
        if (tempTitle.length > 52) {
            tempTitle = tempTitle.slice(0, 50) + "...";
        }

        setSongTitle(tempTitle);
    }, [title, artist]);

    return (
        <div className="top3item" onClick={onClick} style={{ cursor: "pointer" }}>
            <div id="bringToDetailsPg">
                <img src={img} alt={songTitle} className="top3img" />
                <h6 className="top3title">{songTitle}</h6>
                <p className="top3artist">{artist}</p>
            </div>
            <h2>#{rank}</h2>
        </div>
    );
}

export default Top3Item;