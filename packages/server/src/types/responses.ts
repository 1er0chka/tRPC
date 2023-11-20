import {Coin, History} from "../../../../types/coin";


export interface ICoinsResponse {
    data: Coin[];
}

export interface ICoinResponse {
    data: Coin;
}

export interface IHistoryResponse {
    data: History[];
}
