import axios from 'axios';

export const login = async () => {
    const result = await axios.post('https://api.robinhood.com/api-token-auth', {
        username: 'test',
        password: 'test',
    });

    return result.data;
};