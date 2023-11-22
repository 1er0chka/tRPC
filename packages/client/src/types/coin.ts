import {Coin} from "../../../../types/coin";

export const defaultCoin: Coin = {
    changePercent24Hr: "",
    id: "",
    marketCapUsd: "",
    maxSupply: "",
    name: "",
    priceUsd: "",
    rank: "",
    supply: "",
    symbol: "",
};

export interface Portfolio {
    id: string;
    number: number;
    oldPrice: number;
}

export interface PortfolioCoin extends Portfolio {
  newPrice: number;
  difference: number;
  name: string;
  symbol: string
}

export type Sort = "rank" | "priceUsd" | "changePercent24Hr" | "marketCapUsd";
