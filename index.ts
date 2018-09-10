import { login } from './src/auth';

const main = (async () => {
    const token = await login('', '');
    console.log(token);
});

main();