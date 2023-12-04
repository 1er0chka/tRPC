import React, {FunctionComponent, useState} from "react";
import styles from "./TableHeader.module.scss";
import {Coin} from "../../../../../../types/coin";
import {Sort} from "../../../types/coin";

interface ITableHeaderProps {
    objects: Coin[];
    setObjects: React.Dispatch<React.SetStateAction<Coin[]>>;
}

const TableHeader: FunctionComponent<ITableHeaderProps> = ({
                                                               objects,
                                                               setObjects,
                                                           }) => {
    const [sortType, setSortType] = useState<Sort>("rank");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const changeSort = (newSortType: Sort) => {
        let sortedObjects;

        if (newSortType === sortType) {
            sortedObjects = [...objects].reverse();
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            if (['rank', 'priceUsd', 'changePercent24Hr', 'marketCapUsd'].includes(newSortType)) {
                sortedObjects = [...objects].sort((a, b) => {
                    const first = parseFloat(a[newSortType]);
                    const second = parseFloat(b[newSortType]);
                    return sortOrder === "asc" ? first - second : second - first;
                });
            } else {
                sortedObjects = [...objects].sort((a, b) => {
                    const first = a[newSortType].toLowerCase();
                    const second = b[newSortType].toLowerCase();
                    if (first < second) {
                        return sortOrder === "asc" ? -1 : 1;
                    }
                    if (first > second) {
                        return sortOrder === "asc" ? 1 : -1;
                    }
                    return 0;
                });
            }
            setSortType(newSortType);
            setSortOrder("asc");
        }

        setObjects(sortedObjects);
    };

    return (
        <thead className={styles.tableHeader}>
        <tr>
            <th onClick={() => changeSort("rank")} data-testid="table-header-#">
                # {sortType === "rank" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th>Name</th>
            <th onClick={() => changeSort("priceUsd")} data-testid="table-header-Price">
                Price{" "}
                {sortType === "priceUsd" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => changeSort("changePercent24Hr")} data-testid="table-header-24h%">
                24h%{" "}
                {sortType === "changePercent24Hr"
                    ? sortOrder === "asc"
                        ? "▼"
                        : "▲"
                    : ""}
            </th>
            <th onClick={() => changeSort("marketCapUsd")} data-testid="table-header-Market Cap">
                Market Cap{" "}
                {sortType === "marketCapUsd" ? (sortOrder === "asc" ? "▼" : "▲") : ""}
            </th>
            <th></th>
        </tr>
        </thead>
    );
};

export default TableHeader;
