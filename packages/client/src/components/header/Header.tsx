import React, {FunctionComponent, useState} from 'react';
import styles from './Header.module.scss'
import {Coin} from "../../../../../types/coin";
import HeaderCoinCard from "./header-coin-card/HeaderCoinCard";
import ModalPortfolio from "../modal-portfolio/ModalPortfolio";
import UserPortfolio from "./portfolio/UserPortfolio";

interface IHeaderProps {
    coins: Coin[]
    portfolioRefresh: () => void
    portfolioSum: number
    portfolioDif: number
}

const Header: FunctionComponent<IHeaderProps> = ({coins, portfolioRefresh, portfolioSum, portfolioDif}) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <div className={styles.body}>
            {coins.length == 3 ?
                <div className={styles.popularCoins}>
                    {coins.map((coin) => <HeaderCoinCard coin={coin}/>)}
                </div>
                :
                <div/>
            }
            <UserPortfolio onClickAction={() => setModalVisible(true)} portfolioSum={portfolioSum}
                           portfolioDif={portfolioDif}/>
            <ModalPortfolio isVisible={isModalVisible} setVisible={setModalVisible}
                            portfolioRefresh={portfolioRefresh}/>
        </div>
    );
};

export default Header;