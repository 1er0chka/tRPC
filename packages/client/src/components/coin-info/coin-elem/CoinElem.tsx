import React, {useContext} from "react";
import styles from "./CoinElem.module.scss";
import {CoinInfoContext} from "../../../provider/CoinInfoContext";

const CoinElem = () => {
    const {coin} = useContext(CoinInfoContext);

    return (
        <div className={styles.title}>
            <div className={styles.coinRank} data-testid="coin-rank">{coin.rank}.</div>
            <img className={styles.coinImage} alt={""}
                 src={"https://assets.coincap.io/assets/icons/" + coin.symbol.toLowerCase() + "@2x.png"}></img>
            <div className={styles.coinName} data-testid="coin-name">{coin.name}</div>
            <div className={styles.coinSymbol} data-testid="coin-symbol">{coin.symbol}</div>
        </div>
    );
};

export default CoinElem;
