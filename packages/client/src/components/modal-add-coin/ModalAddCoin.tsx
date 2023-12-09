import React, {FunctionComponent, useEffect, useState} from "react";
import styles from "./ModalAddCoin.module.scss";
import {Coin} from "../../../../../types/coin";
import {formatPrice, formatPriceString} from "../../formats/formats";
import Button from "../button/Button";
import usePortfolio from "../../hooks/usePortfolio";

interface IModalAddCoinProps {
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    coin: Coin;
    portfolioRefresh: () => void
}

const ModalAddCoin: FunctionComponent<IModalAddCoinProps> =
    ({isVisible, setVisible, coin, portfolioRefresh}) => {
        const [coinNumber, setCoinNumber] = useState<number>(0);
        const [isNumberCorrect, setIsNumberCorrect] = useState<boolean>(false);
        const {addToPortfolio} = usePortfolio();

        const handleClose = (
            e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>,
        ) => {
            if (e.target === e.currentTarget) {
                setCoinNumber(0);
                setVisible(false);
            }
        };

        useEffect(() => {
            if (coinNumber > 0) {
                setIsNumberCorrect(true);
            } else {
                setIsNumberCorrect(false);
            }
        }, [coinNumber]);


        const handleAddToPortfolio = () => {
            addToPortfolio(coin, coinNumber)
            portfolioRefresh()
            setCoinNumber(0)
            setVisible(false)
        }

        return isVisible ? (
            <div className={styles.modal} data-testid="modal-add-coin" onClick={handleClose}>
                <div className={styles.content}>
                    <div className={styles.number}>
                        <div className={styles.info}>
                            <div className={styles.coinName} data-testid="coin-name">{coin.name}</div>
                            <div className={styles.coinPrice} data-testid="coin-price">
                                {formatPriceString(coin.priceUsd)}
                            </div>
                        </div>
                        <div className={isNumberCorrect ? styles.input : styles.incorrectInput}>
                            <input data-testid="coin-number" type={"number"} placeholder={"number"}
                                   onChange={(event) => setCoinNumber(parseFloat(event.target.value))}/>
                        </div>
                    </div>
                    <div className={styles.amount} data-testid="amount">
                        {isNaN(coinNumber * parseFloat(coin.priceUsd))
                            ? "$0.00"
                            : formatPrice(coinNumber * parseFloat(coin.priceUsd))}
                    </div>
                    <div className={styles.buttons}>
                        <Button data-testid="modal-add-coin-close-button" onClick={handleClose} disabled={false} label={"Cancel"} mode={"secondary"}/>
                        <Button data-testid="modal-add-coin-buy-button" onClick={handleAddToPortfolio} disabled={!isNumberCorrect} label={"Buy"} mode={"primary"}/>
                    </div>
                </div>
            </div>
        ) : null;
    };

export default ModalAddCoin;
