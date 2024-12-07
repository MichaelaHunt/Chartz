import "./Components.css";

interface SavedSongProps {
    img: string;
    title: string;
    artist: string;
    onRemove: () => void;
}

function SavedSong({ img, title, artist, onRemove }: SavedSongProps) {
    return (
        <>
            <div className="savedSongItem" id="bringToDetailsPg">
                <img src={img} alt={title}></img>
                <h3>{title}</h3>{/*in the code, truncate the song name if it gets too long we want to leave room for the artist name! */}
                <h3 className="spacer">|</h3>
                <h3>{artist}</h3>
                <button onClick={onRemove} className="removeButton"><i className="fa-solid fa-trash"></i></button>
            </div>
        </>
    );
}

export default SavedSong;