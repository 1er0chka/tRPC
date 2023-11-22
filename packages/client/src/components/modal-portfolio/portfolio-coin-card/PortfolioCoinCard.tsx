import React, {FunctionComponent} from 'react';
import styles from './PortfolioCoinCard.module.scss'
import {formatPrice} from "../../../formats/formats";
import SecondaryButton from "../../secondary-button/SecondaryButton";
import {PortfolioCoin} from "../../../types/coin";

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
                        <div>{formatPrice(coin.oldPrice)}</div>
                        <div className={styles.difference}>
                            {formatPrice(coin.difference)}
                        </div>
                    </div>
                </div>
                <div className={styles.deleteButton}>
                    <SecondaryButton onClick={() => onDelete(coin)} disabled={false} text={"X"}/>
                </div>
            </div>
        );
    }
;

export default PortfolioCoinCard;