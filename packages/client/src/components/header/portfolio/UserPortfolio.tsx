import React, {FunctionComponent} from 'react';
import styles from './UserPortfolio.module.scss'
import {formatPrice} from "../../../formats/formats";

interface IPortfolioProps {
    onClickAction: () => void
    portfolioSum: number
    portfolioDif: number
}

const UserPortfolio: FunctionComponent<IPortfolioProps> = ({onClickAction, portfolioSum, portfolioDif}) => {

    return (
        <div className={styles.body} onClick={onClickAction} data-testid="portfolio">
            <div className={styles.portfolioSum} data-testid="portfolio-sum">
                <div className={styles.summa}>{formatPrice(portfolioSum)}</div>
                {
                    (portfolioDif > 0.01 || portfolioDif < -0.01) ?
                        <div className={styles.difference} data-testid="portfolio-difference">
                            {formatPrice(portfolioDif)} ({(portfolioDif / portfolioSum * 100).toFixed(2)}%)
                        </div>
                        :
                        <div className={styles.difference} data-testid="portfolio-difference">0 (0%)</div>
                }
            </div>
            <img className={styles.image} alt={""} src={"/resources/images/coin.png"}/>
        </div>
    );
};

export default UserPortfolio;