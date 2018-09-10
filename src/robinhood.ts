import { accounts } from './account';
import { login, logout } from './auth';

class Robinhood {
    private token: string = '';
    private isLoggedIn: boolean = false;
    
    public async login(username: string, password: string) {
        this.token = await login(username, password);
        this.token !== '' ? this.isLoggedIn = true : this.isLoggedIn = false;

        return this.isLoggedIn;
    }

    public async logout() {
        logout(this.token);
    }

    public async getAccount() {
        return await accounts(this.token);
    }
}

export default Robinhood;