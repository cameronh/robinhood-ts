import axios, { AxiosRequestConfig } from 'axios';
import { API_TOKEN_AUTH, API_TOKEN_LOGOUT } from './util';

export const login = async (username: string, password: string) => {
    const options: AxiosRequestConfig = {
        url: API_TOKEN_AUTH,
        method: 'POST',
        data: {
            username,
            password,
        },
        headers: {
            Accept: 'application/json',
        },
    };

    const result = await axios(options);
    if (result.data.token === undefined) {
        throw Error('Unable to log in with provided credentials.');
    }

    return result.data;
};

export const logout = async (token: string) => {
    const options: AxiosRequestConfig = {
        url: API_TOKEN_LOGOUT,
        method: 'POST',
        data: '',
        headers: {
            Authorization: `Token ${token}`,
        },
    };
    
    const result = await axios(options);
    if (result.data.detail) {
        throw Error('Invalid token.');
    }

    return result.data;
};