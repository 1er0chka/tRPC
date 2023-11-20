import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from './ModalPortfolio.module.scss'
import {Coin, Portfolio, PortfolioCoin} from "../../../../../types/coin";
import PrimaryButton from "../primary-button/PrimaryButton";
import PortfolioCoinCard from "./portfolio-coin-card/PortfolioCoinCard";

interface IModalPortfolioProps {
    isVisible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    portfolioCoins: PortfolioCoin[]
}

const ModalPortfolio: FunctionComponent<IModalPortfolioProps> = ({isVisible, setVisible, portfolioCoins}) => {

    // TODO портфолио

    return isVisible ?
        <div className={styles.root}>
            <div className={styles.body}>
                <div className={styles.title}>Portfolio</div>
                {
                    portfolioCoins.map((coin) => <PortfolioCoinCard coin={coin} key={coin.id}/>)
                }
                <PrimaryButton onClick={() => setVisible(false)} disabled={false} text={"Close"}/>
            </div>
        </div>
        : null
};

export default ModalPortfolio;