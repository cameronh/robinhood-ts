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
};