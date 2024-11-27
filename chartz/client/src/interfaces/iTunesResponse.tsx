export interface iTunesSong {
    id: number;
    title: string;
    artist: string;
    album: string;
    coverImage: string;
  }
  
  export interface iTunesResponse {
    songs: iTunesSong[];
  }