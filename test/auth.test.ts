import axios from 'axios';
import { login } from '../src/auth';

jest.mock('axios');

describe('Authentication', () => {
    it('Should receive a token upon logging in', async () => {
        const resp = { data: { token: '' }};
        (axios.post as any).mockResolvedValue(resp);

        const result = await login();
        return expect(result).toHaveProperty('token');
    });
});