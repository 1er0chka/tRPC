import React, {FunctionComponent} from 'react';
import styles from './PortfolioCoinCard.module.scss'
import {formatPrice} from "../../../formats/formats";
import {PortfolioCoin} from "../../../types/coin";
import Button from "../../button/Button";

interface IPortfolioCoinProps {
    coin: PortfolioCoin
    onDelete: (coin: PortfolioCoin) => void
}

const PortfolioCoinCard: FunctionComponent<IPortfolioCoinProps> = ({coin, onDelete}) => {
        return (
            <div className={styles.body}>
                <div className={styles.coin}>
                    <div className={styles.coinInfo}>
                        <img className={styles.coinLogo} alt={""}
                             src={"https://assets.coincap.io/assets/icons/" + coin.symbol.toLowerCase() + "@2x.png"}/>
                        <div className={styles.name}>
                            {coin.name} ({coin.number})
                        </div>
                    </div>
                    <div className={styles.price}>
                        <div>{formatPrice(coin.newPrice * coin.number)}</div>
                        <div className={styles.difference}>
                            {formatPrice(coin.difference)}
                        </div>
                    </div>
                </div>
                <div className={styles.deleteButton}>
                    <Button onClick={() => onDelete(coin)} disabled={false} label={"X"} mode={"secondary"}/>
                </div>
            </div>
        );
    }
;

export default PortfolioCoinCard;