import React, {useState} from 'react';
import {defaultCoin, Portfolio, PortfolioCoin} from "../types/coin";
import {Coin} from "../../../../types/coin";
import client from "../client/client";

const UsePortfolio = () => {
    const [portfolioSum, setPortfolioSum] = useState<number>(0)
    const [portfolioDif, setPortfolioDif] = useState<number>(0)

    const getCoin = async (id: string) => {
        try {
            return await client.coins.getById.mutate({id: id});
        } catch (error) {
            return defaultCoin;
        }
    };

    const refreshUserPortfolio = () => {
        const portfolio = localStorage.getItem("portfolio");
        setPortfolioSum(0)
        setPortfolioDif(0)
        if (portfolio) {
            const portfolioCoins: PortfolioCoin[] = JSON.parse(portfolio);
            for (const coin of portfolioCoins) {
                setPortfolioSum(coin.newPrice * coin.number + portfolioSum)
                setPortfolioDif(coin.difference + portfolioDif)
            }
        }
    }

    const refreshPortfolio = () => {
        const portfolio = localStorage.getItem("portfolio");
        if (portfolio) {
            const portfolioCoins: PortfolioCoin[] = JSON.parse(portfolio);
            refreshPortfolioCoins(portfolioCoins)
        }
    }

    const refreshPortfolioCoins = async (portfolio: PortfolioCoin[]) => {
        for (const coin of portfolio) {
            const newCoin: Coin = await getCoin(coin.id)
            if (newCoin && newCoin.id) {
                coin.newPrice = parseFloat(newCoin.priceUsd)
                coin.difference = coin.number * coin.newPrice - coin.oldPrice
            }
        }
        localStorage.setItem("portfolio", JSON.stringify(portfolio));
    }

    const addToPortfolio = (coin: Coin, coinNumber: number) => {
        const portfolio = localStorage.getItem("portfolio");
        const newCoin: PortfolioCoin = {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            number: coinNumber,
            oldPrice: parseFloat(coin.priceUsd) * coinNumber,
            newPrice: parseFloat(coin.priceUsd),
            difference: 0
        };
        if (portfolio) {
            const result: PortfolioCoin[] = JSON.parse(portfolio);
            if (
                !result.some((coin) => {
                    if (coin.id == newCoin.id) {
                        coin.number += newCoin.number;
                        coin.oldPrice += newCoin.oldPrice;
                        coin.difference = coin.number * newCoin.newPrice - coin.oldPrice
                        return true;
                    }
                    return false;
                })
            ) {
                result.push(newCoin);
            }
            localStorage.setItem("portfolio", JSON.stringify(result));
        } else {
            const data: Portfolio[] = [newCoin];
            localStorage.setItem("portfolio", JSON.stringify(data));
        }
    };

    return {
        addToPortfolio,refreshPortfolio, refreshUserPortfolio, portfolioDif, portfolioSum
    };
};

export default UsePortfolio;