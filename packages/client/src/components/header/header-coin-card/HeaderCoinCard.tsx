import React, {FunctionComponent} from 'react';
import styles from './HeaderCoinCard.module.scss'
import {formatPriceString} from "../../../formats/formats";
import {Coin} from "../../../../../../types/coin";

interface IHeaderCoinCardProps {
    coin: Coin
}

const HeaderCoinCard: FunctionComponent<IHeaderCoinCardProps> = ({coin}) => {
    return (
        <div className={styles.body} data-testid="header-coin-card">
            <div className={styles.coinInfo}>
                <img alt={""} className={styles.coinImage}
                     src={"https://assets.coincap.io/assets/icons/" + coin.symbol.toLowerCase() + "@2x.png"}/>
                <div className={styles.coinName}>{coin.name}</div>
                <div className={styles.coinSymbol}>{coin.symbol}</div>
            </div>
            <div className={styles.coinPrice}>{formatPriceString(coin.priceUsd)}</div>
        </div>
    );
};

export default HeaderCoinCard;