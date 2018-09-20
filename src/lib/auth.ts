import axios, { AxiosRequestConfig } from 'axios';
import OAuth2Token from './oauth2Token';
import { endpoints } from './util';

export const login = async (username: string, password: string) => {
    const options: AxiosRequestConfig = {
        url: endpoints.login,
        method: 'POST',
        data: {
            username,
            password,
            grant_type: 'password',
            scope: 'internal',
            expires_in: 86400,
            client_id: 'c82SH0WZOsabOXGP2sxqcj34FxkvfnWRZBKlBjFS',
        },
        headers: {
            Accept: 'application/json',
        },
    };

    try {
        const result = await axios(options);
        return result.data;
    } catch (error) {
        if (error.response.data.hasOwnProperty('non_field_errors')) {
            throw Error(error.response.data.non_field_errors);
        }
    }
};

export const logout = async (token: OAuth2Token) => {
    const options: AxiosRequestConfig = {
        url: endpoints.logout,
        method: 'POST',
        data: '',
        headers: {
            Accept: 'application/json',
            Authorization: `Token ${token}`,
        },
    };
    
    try {
        const result = await axios(options);
        return result.data;
    } catch (error) {
        if (error.response.data.hasOwnProperty('detail')) {
            throw Error(error.response.data.detail);
        }
    }
};