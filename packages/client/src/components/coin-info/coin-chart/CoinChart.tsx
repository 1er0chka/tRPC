import React, {useContext} from "react";
import styles from "./CoinChart.module.scss";
import {CoinInfoContext} from "../../../provider/CoinInfoContext";
import Button from "../../button/Button";
import Chart from "../../../chart/Chart";

const CoinChart = () => {
    const {interval, setInterval} = useContext(CoinInfoContext);

    return (
        <div className={styles.body}>
            <div className={styles.modeList}>
                <Button
                    onClick={() => setInterval("m1")}
                    disabled={interval == "m1"}
                    label={"24H"}
                    mode={"primary"}/>
                <Button
                    onClick={() => setInterval("m15")}
                    disabled={interval == "m15"}
                    label={"7D"}
                    mode={"primary"}
                />
                <Button
                    onClick={() => setInterval("h1")}
                    disabled={interval == "h1"}
                    label={"1M"}
                    mode={"primary"}
                />
            </div>
            <div>
                <Chart/>
            </div>
        </div>
    );
};

export default CoinChart;
