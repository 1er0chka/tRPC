import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from './Table.module.scss'
import TableHeader from "./table-header/TableHeader";
import TableRow from "./table-row/TableRow";
import Pagination from "./pagination/Pagination";
import ModalAddCoin from "../modal-add-coin/ModalAddCoin";
import {defaultCoin} from "../../types/coin";
import {Coin} from "../../../../../types/coin";

interface ITableProps {
    itemsNumber: number;
    objects: Coin[];
    setObjects: React.Dispatch<React.SetStateAction<Coin[]>>;
    refreshTable: (a: number) => Promise<void>;
    portfolioRefresh: () => void
}

const Table: FunctionComponent<ITableProps> = ({itemsNumber, objects, setObjects, refreshTable, portfolioRefresh}) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [coin, setCoin] = useState<Coin>(defaultCoin);

    useEffect(() => {
        if (coin != defaultCoin) {
            setModalVisible(true);
        }
    }, [coin]);

    return (
        <div className={styles.body}>
            <div>
                <table className={styles.table}>
                    <TableHeader objects={objects} setObjects={setObjects}/>
                    <tbody>
                    {objects.map((rowContent: Coin, rowId: number) => (
                        <TableRow rowContent={rowContent} key={rowId} setCoin={setCoin}/>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination itemsNumber={itemsNumber} refreshTable={refreshTable}/>
            <ModalAddCoin isVisible={isModalVisible} setVisible={setModalVisible} coin={coin} portfolioRefresh={portfolioRefresh}/>
        </div>
    );
};

export default Table;