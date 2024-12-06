import { GeniusSong } from "../interfaces/GeniusResponse";

async function getGeniusSongData(songTitle: string) {
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
    const id = hits[0].result.id;

    //now get the song details
    const res = await fetch(`/api/genius/song/${id}`, {
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
    
    const returnData: GeniusSong = { description, url };
    console.log("Returndata: " + JSON.stringify(returnData));
    return returnData;
  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return {};
  }
}

async function fetchData() {
  try {
    const returnData = await getGeniusSongData("Shape of You");
    console.log("Returndata: " + JSON.stringify(returnData));
  } catch (err) {
    console.log('Error from data retrieval:', err);
  }
}

fetchData();

export { getGeniusSongData };