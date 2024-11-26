import "./Components.css";

function Top3Item() {
    return (
        <>
            <div className="top3item">
                <div>
                    <img className="top3img"></img>
                    <h6 className="top3title">Song Title</h6>
                    <p className="top3artist">Song Artist</p>
                </div>
                <h2>#1</h2>
            </div>
        </>
    );
}

export default Top3Item;