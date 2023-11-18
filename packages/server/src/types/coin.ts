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

export interface History {
  priceUsd: string;
  time: string;
  circulatingSupply: string;
  date: string;
}