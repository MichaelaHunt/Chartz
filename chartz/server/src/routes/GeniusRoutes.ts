import { Request } from 'express';

const searchGenius = async (req: Request) => {
    try {
        const response = await fetch(
        `https://api.genius.com/search?q=${req.params.query}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
        }
        );
        const data = await response.json();
        if (!response.ok) {
        throw new Error('invalid API response, check the network tab');
        }
        return data;
    } catch (err) {
        console.log('an error occurred', err);
        return [];
    }
};

export { searchGenius };