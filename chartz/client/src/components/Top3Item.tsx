import { useEffect, useState } from "react";
import "./Components.css";
import { Link } from "react-router-dom";

interface Top3ItemProps {
    img: string;
    title: string;
    artist: string;
    rank: number;
}

function Top3Item({ img, title, artist, rank }: Top3ItemProps) {
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
        if (tempTitle.length > 52) {
            tempTitle = title.slice(0, 50) + "...";
        }

        setSongTitle(tempTitle);
        
    }, []);
    return (
        <div className="top3item">
            <Link to='/details' className='top3link' state={{title: songTitle}}>
                <img src={img} alt={songTitle} className="top3img" />
                <h6 className="top3title">{songTitle}</h6>
                <p className="top3artist">{artist}</p>
            </Link>
            <h2>#{rank}</h2>
        </div>
    );
}

export default Top3Item;