import axios, { AxiosRequestConfig } from 'axios';
import { endpoints } from './util';

export const accounts = async (token: string) => {
    const options: AxiosRequestConfig = {
        url: endpoints.accounts,
        method: 'GET',
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