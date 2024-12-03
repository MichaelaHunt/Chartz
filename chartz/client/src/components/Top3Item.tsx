import "./Components.css";

interface Top3ItemProps {
    img: string;
    title: string;
    artist: string;
    rank: number;
}

function Top3Item({ img, title, artist, rank }: Top3ItemProps) {
    return (
        <div className="top3item">
            <div>
                <img src={img} alt={title} className="top3img" />
                <h6 className="top3title">{title}</h6>
                <p className="top3artist">{artist}</p>
            </div>
            <h2>#{rank}</h2>
        </div>
    );
}

export default Top3Item;