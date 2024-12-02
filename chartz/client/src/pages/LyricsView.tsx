import Navbar from "../components/Navbar";
import './Pages.css';
const lyric = `[Verse 1]
I could go and read your mind
Think about your dumb face all the time
Living in your glass house, I'm outside, uh
Looking into big blue eyes
Did it just to hurt me, make me cry
Smiling through it all, yeah, that's my life

[Pre-Chorus]
You're an idiot, now I'm sure
Now I'm positive, I should go and warn her

[Chorus]
Ooh, bet you're thinking, "She's so cool"
Kicking back on your couch, making eyes from across the room
Wait, I think I've been there too, ooh

[Verse 2]
What'd she do to get you off? (Uh-huh)
Taking down her hair like, oh my God
Taking off your shirt, I did that once
Or twice, uh
No, I know, I know I'll fuck off (Uh-huh)
But I think I like her, she's so fun
Wait, I think I hate her, I'm not that evolved

[Pre-Chorus]
I'm sorry she's missing it, sad, sad boy
Not my business, but I had to warn ya

[Chorus]
Ooh, bet you're thinking, "She's so cool"
Kicking back on your couch, making eyes from across the room
Wait, I think I've been there too, ooh
Ooh, you've got me thinking, "She's so cool"
But I know what I know and you're just another dude
Ooh, that's so true, ooh

[Bridge]
Made it out alive, but I think I lost it
Said that I was fine, said it from the coffin
Remember how I died when you started walking?
That's my life, that's my life
I'll put up a fight, taking out my earrings
Don't you know the vibe? Don't you know the feeling?
You should spend the night, catch me on your ceiling
That's your prize, that's your prize
Well

[Chorus]
Mm, bet you're thinking, "She's so cool"
Kicking back on your couch, making eyes from across the room
Wait, I think I've been there too, ooh
Ooh, you've got me thinking, "She's so cool"
But I know what I know and you're just another dude
Ooh, that's so true, ooh, ooh, oh`;

function LyricsView() {
    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="bannerContainer">
                    <img className="bannerImg"></img>
                    <div className="bannerText">
                        <h1>Song Title</h1>
                        <h4>from</h4>
                        <h2>Album</h2>
                        <h4>by</h4>
                        <h2>Artist</h2>
                    </div>
                </div>
                <div className="body">
                    {/*lyrics section here*/}
                    <div className="lyricsContainer">
                        <div className="lyricsItem">
                            <p>{lyric}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LyricsView;