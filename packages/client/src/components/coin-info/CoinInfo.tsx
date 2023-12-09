import React, {FunctionComponent, useContext, useState} from 'react';
import {CoinInfoContext} from "../../provider/CoinInfoContext";
import styles from './CoinInfo.module.scss'
import {Link} from "react-router-dom";
import {formatPriceString} from "../../formats/formats";
import ModalAddCoin from "../modal-add-coin/ModalAddCoin";
import CoinElem from "./coin-elem/CoinElem";
import CoinChart from "./coin-chart/CoinChart";
import CoinData from "./coin-data/CoinData";

interface ICoinInfoProps {
    portfolioRefresh: () => void
}

const CoinInfo:FunctionComponent<ICoinInfoProps> = ({portfolioRefresh}) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const {coin} = useContext(CoinInfoContext);

    return (
        <div data-testid="coin">
            <CoinElem/>
            <div className={styles.info}>
                <div className={styles.infoLeft}>
                    <CoinChart/>
                    <Link className={styles.back} to={"/"}>← Back to table </Link>
                </div>
                <div className={styles.infoRight}>
                    <div className={styles.coinPrice} data-testid="coin-Price">
                        {formatPriceString(coin.priceUsd)}
                    </div>
                    <CoinData
                        primaryInfo={"Market Cap"}
                        secondaryInfo={formatPriceString(coin.marketCapUsd)}
                    />
                    <CoinData
                        primaryInfo={"Supply"}
                        secondaryInfo={formatPriceString(coin.supply)}
                    />
                    <CoinData
                        primaryInfo={"Max Supply"}
                        secondaryInfo={formatPriceString(coin.maxSupply)}
                    />
                    <button data-testid="coin-buy-button"
                        onClick={() => setModalVisible(true)}
                        className={styles.addButton}
                    >
                        Add To Basket
                    </button>
                </div>
            </div>
            <ModalAddCoin isVisible={isModalVisible} setVisible={setModalVisible} coin={coin}
                          portfolioRefresh={portfolioRefresh}/>
        </div>
    );
};

export default CoinInfo;