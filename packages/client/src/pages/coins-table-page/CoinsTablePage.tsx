import React, {useEffect, useState} from 'react';
import styles from './CoinsTablePage.module.scss'
import Header from "../../components/header/Header";
import client from "../../client/client";
import Search from "../../components/search/Search";
import Table from "../../components/table/Table";
import Loading from "../../components/loading/Loading";
import {defaultCoin, PortfolioCoin} from "../../types/coin";
import {Coin} from "../../../../../types/coin";

const CoinsTablePage = () => {
    const [popularCoins, setPopularCoins] = useState<Coin[]>([])
    const [coins, setCoins] = useState<Coin[]>([])
    const [coinsNumber, setCoinsNumber] = useState<number>(0)
    const [searchRequest, setSearchRequest] = useState<string>('')
    const [isDataLoad, setDataLoad] = useState<boolean>(false)
    const [portfolioSum, setPortfolioSum] = useState<number>(0)
    const [portfolioDif, setPortfolioDif] = useState<number>(0)

    const getPopularCoins = async () => {
        client.coins.getAll.mutate({offset: 0})
            .then((data: Coin[]) => {
                setPopularCoins(data.slice(0, 3))
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const getCoins = async (offset: number) => {
        client.coins.getAll.mutate({offset: offset})
            .then((data: Coin[]) => {
                setCoins(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const getCoin = async (id: string) => {
        try {
            return await client.coins.getById.mutate({id: id});
        } catch (error) {
            return defaultCoin;
        }
    };

    const getCoinsNumber = async () => {
        client.coins.getNumber.mutate()
            .then((data: number) => {
                setCoinsNumber(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

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
        console.log(portfolio)
        localStorage.setItem("portfolio", JSON.stringify(portfolio));
    }

    useEffect(() => {
        setDataLoad(false)
        getPopularCoins()
        getCoins(0)
        getCoinsNumber()
        refreshPortfolio()
        refreshUserPortfolio()
    }, [])

    const getSearchResult = async () => {
        if (searchRequest) {
            client.coins.getSearchResult.mutate({id: searchRequest})
                .then((data: Coin[]) => {
                    setCoins(data)
                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            getCoins(0)
        }
    }

    useEffect(() => {
        if (coins.length > 0) {
            setDataLoad(true)
        }
    }, [coins])

    return (
        <div className={styles.body}>
            <Header coins={popularCoins} portfolioRefresh={refreshUserPortfolio} portfolioDif={portfolioDif} portfolioSum={portfolioSum}/>
            <div className={styles.content}>
                <div className={styles.aboveTableArea}>
                    <div className={styles.title}>Today`s Cryptocurrency Prices</div>
                    <Search onClick={getSearchResult} searchInfo={searchRequest} setSearchInfo={setSearchRequest}/>
                </div>
                {
                    isDataLoad ?
                        <Table refreshTable={getCoins} itemsNumber={coinsNumber} objects={coins} setObjects={setCoins}
                               portfolioRefresh={refreshUserPortfolio}/>
                        :
                        <Loading/>
                }
            </div>
        </div>
    );
};

export default CoinsTablePage;