import React, {FunctionComponent} from 'react';
import styles from './HeaderCoinCard.module.scss'
import {Coin} from "../../../../../../types/coin";
import {formatPriceString} from "../../../formats/formats";

interface IHeaderCoinCardProps {
    coin: Coin
}

const HeaderCoinCard: FunctionComponent<IHeaderCoinCardProps> = ({coin}) => {
    return (
        <div className={styles.body}>
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