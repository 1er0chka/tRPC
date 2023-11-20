import React, {FunctionComponent, useState} from 'react';
import styles from './Header.module.scss'
import {Coin, PortfolioCoin} from "../../../../../types/coin";
import HeaderCoinCard from "./header-coin-card/HeaderCoinCard";
import ModalPortfolio from "../modal-portfolio/ModalPortfolio";
import UserPortfolio from "./portfolio/UserPortfolio";

interface IHeaderProps {
    coins: Coin[]
    portfolioCoins: PortfolioCoin[]
}

const Header: FunctionComponent<IHeaderProps> = ({coins, portfolioCoins}) => {
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
            <UserPortfolio onClickAction={() => setModalVisible(true)}/>
            <ModalPortfolio isVisible={isModalVisible} setVisible={setModalVisible} portfolioCoins={portfolioCoins}/>
        </div>
    );
};

export default Header;