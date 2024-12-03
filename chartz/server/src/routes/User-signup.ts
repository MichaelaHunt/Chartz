import axios from 'axios';

const API_URL = 'http://localhost:3000';

interface SignUpData {
    username: string;
    email: string;
    password: string;
}

interface SignUpResponse {
 token: string;
}

export const signUp = async (data: SignUpData): Promise<SignUpResponse> => {
    try {
        const response = await axios.post(`${API_URL}/users/signup`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to sign up:', error);
        if (axios.isAxiosError(error)) {
            throw error.response?.data || new Error('Unknown error');
        } else {
            throw new Error('Unknown error');
        }
    }
};