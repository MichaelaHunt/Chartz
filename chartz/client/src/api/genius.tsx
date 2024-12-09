import { GeniusSong } from "../interfaces/GeniusResponse";

interface ReturnData {
  returnData: GeniusSong;
  songId: number;
}

async function getGeniusSongData(songTitle: string): Promise<ReturnData> {
  try {
    //first search for the song, then get the song details with the other fetch
    const response = await fetch(`/api/genius/search`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        songTitle: songTitle, 
      }),
    });
    const data = await response.json();
    const { response: { hits } } = data;
    const songId: number = hits[0].result.id;

    //now get the song details
    const res = await fetch(`/api/genius/song/${songId}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json', 
      },
    });
     //we want the description and url
    const details = await res.json();
    const descriptionChildren = details.response.song.description.dom.children;
    
    // Function to extract text from children
    const extractText = (children: any[]): string => {
      return children.map((child: any) => {
        if (typeof child === 'string') {
          return child;
        } else if (child.children) {
          return extractText(child.children);
        }
        return '';
      }).join('');
    };

    const description = extractText(descriptionChildren);

    const url = details.response.song.url;

    const image = details.response.song.header_image_thumbnail_url;
    
    const returnData: GeniusSong = { description, url, image };
    return {returnData, songId};
  } catch (err) { 
    console.log('Error from data retrieval:', err);
    const empty = {description: "", url: "", image: ""};
    return {returnData: empty, songId: 0};
  }
}

export { getGeniusSongData };