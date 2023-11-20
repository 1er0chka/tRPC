import React, {FunctionComponent, useEffect, useState} from "react";
import styles from "./ModalAddCoin.module.scss";
import {Coin, Portfolio} from "../../../../../types/coin";
import {formatPrice, formatPriceString} from "../../formats/formats";
import SecondaryButton from "../secondary-button/SecondaryButton";
import PrimaryButton from "../primary-button/PrimaryButton";

interface IModalAddCoinProps {
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    coin: Coin;
}

const ModalAddCoin: FunctionComponent<IModalAddCoinProps> = ({
                                                                 isVisible,
                                                                 setVisible,
                                                                 coin,
                                                             }) => {
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

    const addToPortfolio = () => {

        // TODO portfolio


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
