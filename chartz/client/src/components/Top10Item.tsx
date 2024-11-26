import "./Components.css";

function Top10Item() {
    return (
        <>
            <div className="top10item">
                <h1>1</h1>
                <div>
                    <img className="top10img"></img>
                    <h6 className="top10text">Song Title</h6>
                    <h6 className="top10text">Song Artist</h6>
                </div>
            </div>
        </>
    );
}

export default Top10Item;