import React, {FunctionComponent} from 'react';
import styles from './PortfolioCoinCard.module.scss'
import {Portfolio, PortfolioCoin} from "../../../../../../types/coin";
import {formatPrice} from "../../../formats/formats";
import SecondaryButton from "../../secondary-button/SecondaryButton";

interface IPortfolioCoinProps {
    coin: PortfolioCoin
}

const PortfolioCoinCard: FunctionComponent<IPortfolioCoinProps> = ({coin}) => {
        const removePortfolio = () => {
            const portfolio = localStorage.getItem("portfolio");
            if (coin) {
                if (portfolio) {
                    const result: Portfolio[] = JSON.parse(portfolio);
                    result.filter((item) => {
                        return item.id != coin.id;
                    });
                    const temp = result.filter((item) => {
                        return item.id != coin.id;
                    });
                    localStorage.setItem("portfolio", JSON.stringify(temp));
                }
                document.dispatchEvent(new Event("storage"));
            }
        };

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
                            {formatPrice(coin.oldPrice - coin.number * coin.newPrice)}
                        </div>
                    </div>
                    <div className={styles.deleteButton}>
                        <SecondaryButton onClick={removePortfolio} disabled={false} text={"X"}/>
                    </div>
                </div>
            </div>
        );
    }
;

export default PortfolioCoinCard;