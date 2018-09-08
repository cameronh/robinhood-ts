import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

beforeEach(() => {
    mock.reset();
});

describe('Authentication', () => {
    it('Should receive a token upon logging in', () => {
        expect(mock.onPost('/api-token-auth', 'username=cam&password=test').reply(200, {
            token: 'test',
        })).toEqual({
            token: 'test',
        });
    });
});