import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from './ModalPortfolio.module.scss'
import PrimaryButton from "../primary-button/PrimaryButton";
import PortfolioCoinCard from "./portfolio-coin-card/PortfolioCoinCard";
import {PortfolioCoin} from "../../types/coin";

interface IModalPortfolioProps {
    isVisible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    portfolioRefresh: () => void
}

const ModalPortfolio: FunctionComponent<IModalPortfolioProps> = ({isVisible, setVisible, portfolioRefresh}) => {
    const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[]>([])

    useEffect(() => {
        const portfolio = localStorage.getItem("portfolio");
        if (portfolio) {
            setPortfolioCoins(JSON.parse(portfolio))
        } else {
            setPortfolioCoins([])
        }
    }, [isVisible])

    const onDelete = (coin: PortfolioCoin) => {
        const portfolio = localStorage.getItem("portfolio");
        if (coin) {
            if (portfolio) {
                const portfolioCoins: PortfolioCoin[] = JSON.parse(portfolio);
                portfolioCoins.filter((item) => {
                    return item.id != coin.id;
                });
                const result = portfolioCoins.filter((item) => {
                    return item.id != coin.id;
                });
                localStorage.setItem("portfolio", JSON.stringify(result));
                setPortfolioCoins(result)
            }
        }
        portfolioRefresh()
    }

    return isVisible ?
        <div className={styles.root}>
            <div className={styles.body}>
                <div className={styles.title}>Portfolio</div>
                {
                    portfolioCoins.map((coin) => <PortfolioCoinCard coin={coin} key={coin.id} onDelete={onDelete}/>)
                }
                <PrimaryButton onClick={() => setVisible(false)} disabled={false} text={"Close"}/>
            </div>
        </div>
        : null
};

export default ModalPortfolio;