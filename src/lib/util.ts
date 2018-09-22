export const APIBaseURL = 'https://api.robinhood.com';
export const APIBaseURLCrypto = 'https://nummus.robinhood.com';

export const APIEndpoints = {
    login: APIBaseURL + '/oauth2/token/',
    logout: APIBaseURL + '/api-token-logout/',
    accounts: APIBaseURL + '/accounts/',
};

export const APIEndpointsCrypto = {
    currencyPairs: APIBaseURLCrypto + '/currency_pairs',
    orders: APIBaseURLCrypto + '/orders',
    holdings: APIBaseURLCrypto + '/holdings',
    quotes: APIBaseURL + '/marketdata/forex/quotes/',
};

export const APIHeaders = {
    'accept': 'application/json',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'en;q=1, fr;q=0.9, de;q=0.8, ja;q=0.7, nl;q=0.6, it;q=0.5',
    'content-type': 'application/json',
    'connection': 'keep-alive',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
};