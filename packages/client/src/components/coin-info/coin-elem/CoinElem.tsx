import React, {useContext} from "react";
import styles from "./CoinElem.module.scss";
import {CoinInfoContext} from "../../../provider/CoinInfoContext";

const CoinElem = () => {
    const {coin} = useContext(CoinInfoContext);

    return (
        <div className={styles.title}>
            <div className={styles.coinRank}>{coin.rank}.</div>
            <img className={styles.coinImage} alt={""}
                 src={"https://assets.coincap.io/assets/icons/" + coin.symbol.toLowerCase() + "@2x.png"}></img>
            <div className={styles.coinName}>{coin.name}</div>
            <div className={styles.coinSymbol}>{coin.symbol}</div>
        </div>
    );
};

export default CoinElem;
