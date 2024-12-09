import Auth from '../utils/auth';

const retrieveUser = async () => {
    try {
        const response = await fetch('/api/user', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`,
            },
        });
   const data = await response.json();

   if (!response.ok) {
       throw new Error('Invalid user API response, check network tab');
    }

    return data;
} catch (error) {
    console.error('Failed to retrieve user', error);
    return [];
    }
};

async function createNewSong(songTitle: string, songId: number) {
    let userId = localStorage.getItem("Id");
    console.log("Title and Id: " + songTitle + " and " + songId);
    const response = await fetch(`/api/users/${userId}/songs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
            geniusSongId: songId,  
            songTitle: songTitle
        })
    }).then(res => res.json());
    console.log("Response: " + JSON.stringify(response));
}

async function getUsersSongs() {
    let userId = localStorage.getItem("Id");
    const response = await fetch(`/api/users/${userId}/songs`).then(res => res.json());
    return response;
}

export { retrieveUser, createNewSong, getUsersSongs };