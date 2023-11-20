import React, {useEffect, useState} from 'react';
import styles from './CoinsTablePage.module.scss'
import Header from "../../components/header/Header";
import {Coin, Portfolio, PortfolioCoin} from "../../../../../types/coin";
import client from "../../client/client";

const CoinsTablePage = () => {
    const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[]>([])
    const [popularCoins, setPopularCoins] = useState<Coin[]>([])

    useEffect(() => {
        const getPopularCoins = async () => {
            client.coins.getAll.mutate({offset: 0})
                .then((data: Coin[]) => {
                    setPopularCoins(data.slice(0, 3))
                })
                .catch((error) => {
                    console.error(error)
                })
        }
        getPopularCoins()

        const portfolioJson = localStorage.getItem("portfolio");
        if (portfolioJson) {
            const portfolio: Portfolio[] = JSON.parse(portfolioJson);
            // TODO написать
            console.log(portfolio)
        }
    }, [])


    return (
        <div className={styles.body}>
            <Header portfolioCoins={portfolioCoins} coins={popularCoins}/>
            <div className={styles.content}>
                <div className={styles.aboveTableArea}>
                    <div className={styles.title}>Today`s Cryptocurrency Prices</div>

                </div>
            </div>
        </div>
    );
};

export default CoinsTablePage;