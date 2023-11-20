import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from './UserPortfolio.module.scss'
import {formatPrice} from "../../../formats/formats";
import {Portfolio} from "../../../../../../types/coin";

interface IPortfolioProps {
    onClickAction: () => void
}

const UserPortfolio: FunctionComponent<IPortfolioProps> = ({onClickAction}) => {
    const [portfolioSum, setPortfolioSum] = useState<number>(0);
    const [portfolioDif, setPortfolioDif] = useState<number>(0);

    useEffect(() => {
        document.addEventListener("storage", getSum);
        getSum();
        return () => document.removeEventListener("storage", getSum);
    }, []);

    const getSum = () => {
        let sum = 0;
        const portfolio = localStorage.getItem("portfolio");
        if (portfolio) {
            const data: Portfolio[] = JSON.parse(portfolio);
            data.forEach((item) => {
                sum += item.oldPrice;
            });
        }
        setPortfolioSum(sum);
    };

    useEffect(() => {
        setPortfolioDif(0);
        const getAssets = async (coin: Portfolio) => {
            // TODO: написать
            /*
            Service.getAssetsById(coin.id)
                .then((data) => {
                    setPortfolioDif(
                        portfolioDif +
                        (coin.oldPrice -
                            coin.number * parseFloat(data?.priceUsd as string)),
                    );
                })
                .catch((err) => {
                    console.error(err);
                });*/
        };
        const portfolio = localStorage.getItem("portfolio");
        if (portfolio) {
            const data: Portfolio[] = JSON.parse(portfolio);
            data.forEach((item) => {
                getAssets(item);
            });
        }
    }, [portfolioSum]);

    return (
        <div className={styles.body} onClick={onClickAction}>
            <div className={styles.portfolioSum}>
                <div className={styles.summa}>{formatPrice(portfolioSum)}</div>
                {
                    portfolioDif > 0.01 ?
                        <div className={styles.difference}>
                            {(portfolioDif / portfolioSum * 100).toFixed(2)}
                        </div>
                        :
                        <div className={styles.difference}>0 (0%)</div>
                }
            </div>
                <img className={styles.image} alt={""} src={"/resources/images/coin.png"}/>

        </div>
    );
};

export default UserPortfolio;