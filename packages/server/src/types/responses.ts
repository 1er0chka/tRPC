import {Coin, History} from "./coin";

export interface ICoinsResponse {
    data: Coin[];
}

export interface ICoinResponse {
    data: Coin;
}

export interface IHistoryResponse {
    data: History[];
}
