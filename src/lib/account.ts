import axios, { AxiosRequestConfig } from 'axios';
import OAuth2Token from './oauth2Token';
import { endpoints } from './util';

export const accounts = async (token: OAuth2Token): Promise<IAccountInfo> => {
    const options: AxiosRequestConfig = {
        url: endpoints.accounts,
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_token}`,
        },
    };

    try {
        const result = await axios(options);
        return result.data.results[0];
    } catch (error) {
        if (error.response.data.hasOwnProperty('detail')) {
            throw Error(error.response.data.detail);
        }
    }

    return {};
};

export interface IAccountInfo {
    deactivated?: boolean;
    updated_at?: string;
    margin_balances?: any;
    portfolio?: string;
    cash_balances?: any;
    can_downgrade_to_cash?: string;
    withdrawal_halted?: boolean;
    cash_available_for_withdrawal?: string;
    type?: string;
    sma?: string;
    sweep_enabled?: boolean;
    deposit_halted?: boolean;
    buying_power?: string;
    user?: string;
    max_ach_early_access_amount?: string;
    option_level?: any;
    instant_eligibility?: any;
    cash_held_for_orders?: string;
    only_position_closing_trades?: boolean;
    url?: string;
    positions?: string;
    created_at?: string;
    cash?: string;
    sma_held_for_orders?: string;
    unsettled_debit?: string;
    account_number?: string;
    is_pinnacle_amount?: boolean;
    uncleared_deposits?: string;
    unsettled_funds?: string;
}