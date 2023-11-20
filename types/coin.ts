export interface Coin {
    id: string;
    name: string;
    rank: string;
    symbol: string;
    supply: string;
    maxSupply: string;
    priceUsd: string;
    changePercent24Hr: string;
    marketCapUsd: string;
}

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

export interface History {
    priceUsd: string;
    time: string;
    circulatingSupply: string;
    date: string;
}

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
