export interface GeniusSong {
    id: number;
    title: string;
    artist: string;
    lyrics: string;
  }
  
  export interface GeniusResponse {
    songs: GeniusSong[];
  }