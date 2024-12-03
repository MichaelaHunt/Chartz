export interface bannerProps {
    img: string;
    songTitle: string;
    albumName: string;
    artistName: string;
}

function Banner({img, songTitle, albumName, artistName}: bannerProps) {
    return (
        <div className="bannerContainer">
            <img src={img} className="bannerImg"></img>
            <div className="bannerText">
                <h1>{songTitle}</h1>
                <h4>from</h4>
                <h2>{albumName}</h2>
                <h4>by</h4>
                <h2>{artistName}</h2>
            </div>
        </div>
    );
}

export default Banner;