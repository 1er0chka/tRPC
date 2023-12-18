import React, {FunctionComponent, useEffect, useState} from "react";
import styles from "./Pagination.module.scss";
import Button from "../../button/Button";

interface IPaginationProps {
    refreshTable: (a: number) => Promise<void>;
    itemsNumber: number;
}

const Pagination: FunctionComponent<IPaginationProps> = ({
                                                             refreshTable,
                                                             itemsNumber,
                                                         }) => {
    const [offset, setOffset] = useState<number>(0);

    const increaseOffset = () => {
        setOffset(offset + 40);
    };

    const decreaseOffset = () => {
        setOffset(offset - 40);
    };

    useEffect(() => {
        refreshTable(offset);
    }, [offset]);

    return (
        <div className={styles.pagination} data-testid="pagination">
            <Button onClick={decreaseOffset} disabled={offset - 40 < 0} label={"<"} mode={"primary"} dataTestId={"back-button"}/>
            <div data-testid="coins-table-pagination">
                {offset} - {offset + 40 > itemsNumber ? itemsNumber : offset + 40}
            </div>
            <Button
                onClick={increaseOffset}
                disabled={offset + 40 > itemsNumber}
                label={">"} mode={"primary"}
                dataTestId={"forward-button"}
            ></Button>
        </div>
    );
};

export default Pagination;
