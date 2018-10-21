import axios, { AxiosRequestConfig } from 'axios';
import OAuth2Token from './oauth2Token';
import { APIEndpoints, APIEndpointsCrypto, APIHeaders } from './util';

export const holdings = async (token: OAuth2Token, crypto?: boolean) => {
    const options: AxiosRequestConfig = {
        url: crypto ? APIEndpointsCrypto.holdings : APIEndpoints.holdings,
        method: 'GET',
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