interface SavedSongProps {
    img: string;
    title: string;
    artist: string;
}

function SavedSong({ img, title, artist }: SavedSongProps) {
    return (
        <>
            <div className="savedSongItem">
                <img src={img} alt={title}></img>
                <h3>{title}</h3>{/*in the code, truncate the song name if it gets too long we want to leave room for the artist name! */}
                <h3 className="spacer">|</h3>
                <h3>{artist}</h3>
            </div>
        </>
    );
}

export default SavedSong;