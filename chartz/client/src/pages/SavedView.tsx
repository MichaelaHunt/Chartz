import Navbar from "../components/Navbar";
import SavedSong from "../components/SavedSong";
import './Pages.css';

function SavedView() {
    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    <div className="savedContainer">
                        <div className="savedItem">
                            <h1>Saved Songs</h1>
                            <div className="scrollContainer">
                                <SavedSong></SavedSong>
                                <SavedSong></SavedSong>
                                <SavedSong></SavedSong>
                                <SavedSong></SavedSong>
                                <SavedSong></SavedSong>
                                <SavedSong></SavedSong>
                                <SavedSong></SavedSong>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedView;