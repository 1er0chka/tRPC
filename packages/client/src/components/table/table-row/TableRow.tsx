"use client";
import React, {FunctionComponent} from "react";
import styles from "./TableRow.module.scss";
import {Coin} from "../../../../../../types/coin";
import {formatPriceString} from "../../../formats/formats";
import {Link} from "react-router-dom";

interface ITableRowProps {
    rowContent: Coin;
    setCoin: React.Dispatch<React.SetStateAction<Coin>>;
}

const TableRow: FunctionComponent<ITableRowProps> = ({rowContent, setCoin}) => {

    return (
        <tr className={styles.tableRow}>
            <td>
                <Link key={rowContent.id} to={`/${rowContent.id}`}>{rowContent.rank}</Link></td>
            <td>
                <Link key={rowContent.id} to={`/${rowContent.id}`}>
                    <div className={styles.nameRow}>
                        <img alt={""} className={styles.nameRow_logo}
                             src={"https://assets.coincap.io/assets/icons/" + rowContent.symbol.toLowerCase() + "@2x.png"}/>
                        <div>{rowContent.name}</div>
                        <div className={styles.nameRow_symbol}>{rowContent.symbol}</div>
                    </div>
                </Link>
            </td>
            <td>
                <Link key={rowContent.id} to={`/${rowContent.id}`}>
                    {formatPriceString(rowContent.priceUsd)}
                </Link>
            </td>
            <td>
                <Link key={rowContent.id} to={`/${rowContent.id}`}
                      className={parseFloat(rowContent.changePercent24Hr) < 0 ? styles.negativeSum : styles.positiveSum}>
                    {parseFloat(rowContent.changePercent24Hr).toFixed(2)}%
                </Link>
            </td>
            <td>
                <Link key={rowContent.id} to={`/${rowContent.id}`}>
                    {formatPriceString(rowContent.marketCapUsd)}
                </Link>
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
