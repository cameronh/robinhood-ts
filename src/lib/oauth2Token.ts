interface IOAuth2Token {
    backup_code?: string;
    access_token?: string;
    expires_in?: string;
    mfa_code?: string;
    token_type?: string;
    scope?: string;
    refresh_token?: string;
}

export default IOAuth2Token;