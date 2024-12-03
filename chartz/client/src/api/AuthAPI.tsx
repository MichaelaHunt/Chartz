import type { UserLogin } from '../interfaces/UserLogin';

const login = async (userLogin: UserLogin) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogin),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('User information not retrieved, check network tab');
        }

        return data;
    } catch (error) {
        console.error('Error from user login:', error);
        return Promise.reject('Could not fetch user information');
    }
};

export { login };