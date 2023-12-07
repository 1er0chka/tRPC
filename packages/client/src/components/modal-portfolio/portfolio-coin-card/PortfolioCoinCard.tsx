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
            <div className={styles.body} data-testid="modal-portfolio-coin">
                <div className={styles.coin}>
                    <div className={styles.coinInfo}>
                        <img className={styles.coinLogo} alt={""}
                             src={"https://assets.coincap.io/assets/icons/" + coin.symbol.toLowerCase() + "@2x.png"}/>
                        <div data-testid="modal-portfolio-coin-name" className={styles.name}>
                            {coin.name} ({coin.number})
                        </div>
                    </div>
                    <div className={styles.price}>
                        <div data-testid="modal-portfolio-coin-price">{formatPrice(coin.newPrice * coin.number)}</div>
                        <div data-testid="modal-portfolio-coin-difference" className={styles.difference}>
                            {formatPrice(coin.difference)}
                        </div>
                    </div>
                </div>
                <div data-testid="modal-portfolio-coin-delete-button" className={styles.deleteButton}>
                    <Button onClick={() => onDelete(coin)} disabled={false} label={"X"} mode={"secondary"}/>
                </div>
            </div>
        );
    }
;

export default PortfolioCoinCard;