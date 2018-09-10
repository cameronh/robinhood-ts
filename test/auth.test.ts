import axios from 'axios';
import { login, logout } from '../src/auth';

jest.mock('axios');

describe('Authentication', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('Should throw an error with invalid creds', async () => {
        const resp = { data: { non_field_errors: ['Unable to log in with provided credentials.'] }};
        (axios as any).mockResolvedValue(resp);
        try {
            const result = await login('test', 'test');
        } catch (error) {
            expect(error).toEqual(Error('Unable to log in with provided credentials.'));
        }        
    });

    it('Should receive a token upon logging in', async () => {
        const resp = { data: { token: 'foo' }};
        (axios as any).mockResolvedValue(resp);

        const result = await login('test', 'test');
        expect(result).toHaveProperty('token');
        expect(result.token).toEqual('foo');
    });

    it('Should receive no data upon logging out', async () => {
        const resp = '';
        (axios as any).mockResolvedValue(resp);

        const result = await logout('test');
        expect(result).toEqual('');
    });
});