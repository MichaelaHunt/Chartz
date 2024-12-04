import axios from "axios";

export const signUp = async (formData: {
    username: string;
    email: string;
    password: string;
}) => {
    const response = await axios.post("/users/signup", formData);
    return response.data;
};