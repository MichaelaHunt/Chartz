export interface iTunesTrendingSong {//home page return
    id?: number;
    title: string;
    artist: string;
    album: string;
    image55: string;
    image60: string;
    image170: string;
  }
  
  export interface iTunesResponse {
    songs: iTunesTrendingSong[];
  }

  export interface iTunesSong {
    id?: number;
    title: string;
    artist: string;
    album: string;
    image100?: string;
  }

  export interface itemType {
    title: { label: string };
    "im:artist": { label: string };
    "im:name": { label: string };
    "im:image": { label: string }[];
  }