import { accounts, IAccountInfo } from './lib/account';
import { login, logout } from './lib/auth';
import IOAuth2Token from './lib/oauth2Token';

class Robinhood {
    private token: IOAuth2Token = {};
    private accountInfo: IAccountInfo = {};
    private isLoggedIn: boolean = false;
    
    public async login(username: string, password: string) {
        this.token = await login(username, password);
        this.token.access_token !== '' ? this.isLoggedIn = true : this.isLoggedIn = false;

        return this.isLoggedIn;
    }

    public async logout() {
        logout(this.token);
    }

    public async getAccount() {
        this.accountInfo = await accounts(this.token);

        return this.accountInfo;
    }

    public async getCryptoHoldings() {
        if (this.accountInfo) {
            return this.accountInfo.url;
        }

        return;
    }
}

export default Robinhood;