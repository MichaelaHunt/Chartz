import { iTunesSong } from "../interfaces/iTunesResponse";

const retrieveSongs = async (query: string): Promise<iTunesSong[]> => {
  try {
    const response = await fetch(`/api/itunes/${query}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data.songs;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
};

export { retrieveSongs };