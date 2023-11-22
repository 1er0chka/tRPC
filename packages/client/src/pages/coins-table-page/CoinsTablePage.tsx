import React, {useEffect, useState} from 'react';
import styles from './CoinsTablePage.module.scss'
import Header from "../../components/header/Header";
import client from "../../client/client";
import Search from "../../components/search/Search";
import Table from "../../components/table/Table";
import Loading from "../../components/loading/Loading";
import {Coin} from "../../../../../types/coin";
import usePortfolio from "../../hooks/usePortfolio";

const CoinsTablePage = () => {
    const [popularCoins, setPopularCoins] = useState<Coin[]>([])
    const [coins, setCoins] = useState<Coin[]>([])
    const [coinsNumber, setCoinsNumber] = useState<number>(0)
    const [searchRequest, setSearchRequest] = useState<string>('')
    const [isDataLoad, setDataLoad] = useState<boolean>(false)

    const {portfolioSum, portfolioDif, refreshPortfolio, refreshUserPortfolio} = usePortfolio();

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

    const getCoinsNumber = async () => {
        client.coins.getNumber.mutate()
            .then((data: number) => {
                setCoinsNumber(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        setDataLoad(false)
        getPopularCoins()
        getCoins(0)
        getCoinsNumber()
        refreshPortfolio()
        refreshUserPortfolio()
    }, [])

    useEffect(() => {
        if (coins.length > 0) {
            setDataLoad(true)
        }
    }, [coins])

    return (
        <div className={styles.body}>
            <Header coins={popularCoins} portfolioRefresh={refreshUserPortfolio} portfolioDif={portfolioDif}
                    portfolioSum={portfolioSum}/>
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