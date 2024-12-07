import { iTunesSong, type itemType } from "../interfaces/iTunesResponse";

async function retrieveTrendingSongs() {
  try {
    const response = await fetch(`/api/itunes/10trending`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    let set: any[] = [];
    const entries = data.feed.entry;
    
    entries.forEach((item: itemType) => {
      const title = item.title.label;
      const artist = item["im:artist"].label;
      const album = item["im:name"].label;
      const image55 = item["im:image"][0].label
      const image60 = item["im:image"][1].label
      const image170 = item["im:image"][2].label
      set.push({title, artist, album, image55, image60, image170});
    });

    return set;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
}

async function searchOneSong(songTitle: string) {
  try {
    const response = await fetch('/api/itunes/search', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        songTitle: songTitle, 
      }),
    });
    const data = await response.json();
    
    const { trackName, artistName, collectionName} = data.results[0];
    //translates to: songTitle, artist, Id, albumName
    let songData: iTunesSong = { 
      title: trackName, 
      artist: artistName, 
      album: collectionName
    };
    console.log("Song Data: " + JSON.stringify(songData));
    return songData;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return {title: "", artist: "", album: ""};
  }
}


export { retrieveTrendingSongs, searchOneSong };