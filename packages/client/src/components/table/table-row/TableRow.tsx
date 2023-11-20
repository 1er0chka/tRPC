"use client";
import React, {FunctionComponent} from "react";
import styles from "./TableRow.module.scss";
import {Coin} from "../../../../../../types/coin";
import {formatPriceString} from "../../../formats/formats";

interface ITableRowProps {
    rowContent: Coin;
    setCoin: React.Dispatch<React.SetStateAction<Coin>>;
}

const TableRow: FunctionComponent<ITableRowProps> = ({rowContent, setCoin}) => {
    const handleClick = () => {
        // TODO открытие страницы с хз каким путем
    };

    return (
        <tr className={styles.tableRow}>
            <td onClick={handleClick}>{rowContent.rank}</td>
            <td onClick={handleClick}>
                <div className={styles.nameRow}>
                    <img alt={""} className={styles.nameRow_logo}
                         src={"https://assets.coincap.io/assets/icons/" + rowContent.symbol.toLowerCase() + "@2x.png"}/>
                    <div>{rowContent.name}</div>
                    <div className={styles.nameRow_symbol}>{rowContent.symbol}</div>
                </div>
            </td>
            <td onClick={handleClick}>
                {formatPriceString(rowContent.priceUsd)}
            </td>
            <td onClick={handleClick} className={
                parseFloat(rowContent.changePercent24Hr) < 0
                    ? styles.negativeSum
                    : styles.positiveSum
            }>
                {parseFloat(rowContent.changePercent24Hr).toFixed(2)}%
            </td>
            <td onClick={handleClick}>
                {formatPriceString(rowContent.marketCapUsd)}
            </td>
            <td onClick={() => {
                setCoin(rowContent)
            }}>
                <img className={styles.addButton} src={"/resources/images/add-cart.png"} alt={"Buy"}/>
            </td>
        </tr>
    );
};

export default TableRow;
