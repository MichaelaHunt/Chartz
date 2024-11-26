import Navbar from "../components/Navbar";
import './Pages.css';

function LyricsView() {
    return (
        <>
            <div className="body">
                <Navbar></Navbar>
                {/*banner here*/}
                <div>
                    <img className="lyricsImg"></img>
                    <div className="lyricsText">
                        <h1>Song Title</h1>
                        <h4>from</h4>
                        <h2>Album</h2>
                        <h4>by</h4>
                        <h2>Artist</h2>
                    </div>
                </div>
                {/*lyrics section here*/}
                <div>

                </div>
            </div>
        </>
    );
}

export default LyricsView;