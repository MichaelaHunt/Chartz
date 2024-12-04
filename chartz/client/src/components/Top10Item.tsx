import "./Components.css";

interface Top10ItemProps {
    img: string;
    title: string;
    artist: string;
}

function Top10Item({ img, title, artist }: Top10ItemProps) {
    return (
        <>
            <div className="top10item">
                <h1>1</h1>
                <div>
                    <img src={img} alt={title} className="top10img"></img>
                    <div>
                        <h6 className="top10text">{title}</h6>
                        <h6 className="top10text">{artist}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Top10Item;