import React, {FunctionComponent, useEffect, useState} from "react";
import styles from "./ModalAddCoin.module.scss";
import {Coin} from "../../../../../types/coin";
import {formatPrice, formatPriceString} from "../../formats/formats";
import SecondaryButton from "../secondary-button/SecondaryButton";
import PrimaryButton from "../primary-button/PrimaryButton";
import {Portfolio, PortfolioCoin} from "../../types/coin";

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


        // TODO тоже куда-то запихнуть
        const addToPortfolio = () => {
            const portfolio = localStorage.getItem("portfolio");
            const newCoin: PortfolioCoin = {
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol,
                number: coinNumber,
                oldPrice: parseFloat(coin.priceUsd) * coinNumber,
                newPrice: parseFloat(coin.priceUsd),
                difference: 0
            };
            if (portfolio) {
                const result: PortfolioCoin[] = JSON.parse(portfolio);
                if (
                    !result.some((coin) => {
                        if (coin.id == newCoin.id) {
                            coin.number += newCoin.number;
                            coin.oldPrice += newCoin.oldPrice;
                            coin.difference = coin.number * newCoin.newPrice - coin.oldPrice
                            return true;
                        }
                        return false;
                    })
                ) {
                    result.push(newCoin);
                }
                localStorage.setItem("portfolio", JSON.stringify(result));
            } else {
                const data: Portfolio[] = [newCoin];
                localStorage.setItem("portfolio", JSON.stringify(data));
            }
            portfolioRefresh()
            setCoinNumber(0);
            setVisible(false);
        };

        return isVisible ? (
            <div className={styles.modal} onClick={handleClose}>
                <div className={styles.content}>
                    <div className={styles.number}>
                        <div className={styles.info}>
                            <div className={styles.coinName}>{coin.name}</div>
                            <div className={styles.coinPrice}>
                                {formatPriceString(coin.priceUsd)}
                            </div>
                        </div>
                        <div
                            className={isNumberCorrect ? styles.input : styles.incorrectInput}
                        >
                            <input
                                type={"number"}
                                placeholder={"number"}
                                onChange={(event) =>
                                    setCoinNumber(parseFloat(event.target.value))
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.amount}>
                        {isNaN(coinNumber * parseFloat(coin.priceUsd))
                            ? "$0.00"
                            : formatPrice(coinNumber * parseFloat(coin.priceUsd))}
                    </div>
                    <div className={styles.buttons}>
                        <SecondaryButton onClick={handleClose} disabled={false} text={"Cancel"}/>
                        <PrimaryButton
                            onClick={addToPortfolio}
                            disabled={!isNumberCorrect}
                            text={"Buy"}
                        />
                    </div>
                </div>
            </div>
        ) : null;
    };

export default ModalAddCoin;
