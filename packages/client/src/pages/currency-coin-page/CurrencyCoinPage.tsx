import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import {Coin} from "../../../../../types/coin";
import client from "../../client/client";
import usePortfolio from "../../hooks/usePortfolio";
import styles from './CurrencyCoinPage.module.scss'
import Loading from "../../components/loading/Loading";
import {CoinInfoContext} from "../../provider/CoinInfoContext";
import CoinInfo from "../../components/coin-info/CoinInfo";
import useCoinHistory from "../../hooks/useCoinHistory";

const CurrencyCoinPage = () => {
    const {currencyId} = useParams();
    const [popularCoins, setPopularCoins] = useState<Coin[]>([])
    const [isDataLoad, setDataLoad] = useState<boolean>(false)
    const [isPageExist, setPageExist] = useState<boolean>(true);
    const {coin, setCoin, interval} = useContext(CoinInfoContext);
    const {getHistory} = useCoinHistory();

    const {portfolioSum, portfolioDif, refreshPortfolio, refreshUserPortfolio} = usePortfolio();

    useEffect(() => {
        const getCoin = async (id: string) => {
            client.coins.getById.mutate({id: id}).then((data: Coin) => {
                setCoin(data)
                setPageExist(true)
            }).catch((error) => {
                setPageExist(false)
                setDataLoad(true)
                console.error(error)
            })
        };

        if (currencyId) {
            getCoin(currencyId);
        }
    }, [currencyId]);

    useEffect(() => {
        if (coin.id) {
            getHistory().then(() => setDataLoad(true))
        }
    }, [coin, interval]);

    const getPopularCoins = async () => {
        client.coins.getAll.mutate({offset: 0})
            .then((data: Coin[]) => {
                setPopularCoins(data.slice(0, 3))
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        setDataLoad(false)
        getPopularCoins()
        refreshPortfolio()
        refreshUserPortfolio()
    }, [currencyId]);

    return (
        <div>
            <Header coins={popularCoins} portfolioSum={portfolioSum} portfolioDif={portfolioDif}
                    portfolioRefresh={refreshUserPortfolio}/>
            {
                isDataLoad ?
                    <div>
                        {
                            isPageExist ?
                                <CoinInfo portfolioRefresh={refreshUserPortfolio}/>
                                :
                                <div className={styles.content}>
                                    <div className={styles.error}>Page doesn`t exist</div>
                                    <Link className={styles.back} data-testid="page-back-button" to={"/"}>
                                        {" "}
                                        ← Back to table
                                    </Link>
                                </div>
                        }
                    </div>
                    :
                    <Loading/>
            }
        </div>
    );
};

export default CurrencyCoinPage;