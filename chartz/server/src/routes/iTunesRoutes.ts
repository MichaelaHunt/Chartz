const searchITunes = async () => {
    try {
        const response = await fetch(
        `https://itunes.apple.com/us/rss/topsongs/limit=10/json`
        );
        console.log('Response:', response);
        const data = await response.json();
        if (!response.ok) {
        throw new Error('invalid API response, check the network tab');
        }
        console.log('Data:', data);
        return data;
    } catch (err) {
        console.log('an error occurred', err);
        return [];
    }
};

export { searchITunes };