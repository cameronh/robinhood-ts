export const BASE_URL = 'https://api.robinhood.com';
export const BASE_URL_CRYPTO = 'https://nummus.robinhood.com';

export const endpoints = {
    login: BASE_URL + '/oauth2/token/',
    logout: BASE_URL + '/api-token-logout/',
    accounts: BASE_URL + '/accounts/',
};

export const endpointsCrypto = {
    currencyPairs: BASE_URL_CRYPTO + '/currency_pairs',
    orders: BASE_URL_CRYPTO + '/orders',
    quotes: BASE_URL + '/marketdata/forex/quotes/',
};