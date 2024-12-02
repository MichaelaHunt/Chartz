function SavedSong() {
    return (
        <>
            <div className="savedSongItem">
                <img></img>
                <h3>song name that is really quite long</h3>{/*in the code, truncate the song name if it gets too long we want to leave room for the artist name! */}
                <h3 className="spacer">|</h3>
                <h3>Artist name here</h3>
            </div>
        </>
    );
}

export default SavedSong;