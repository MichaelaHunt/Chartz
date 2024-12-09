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

async function createNewSong() {
    let userId = localStorage.getItem("Id");
    const response = await fetch(`/api/${userId}/songs`);
    console.log("Response: " + JSON.stringify(response));
}

export { retrieveUser, createNewSong };