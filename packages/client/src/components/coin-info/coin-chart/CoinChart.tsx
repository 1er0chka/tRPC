import React, { useContext } from "react";
import styles from "./CoinChart.module.scss";
import {CoinInfoContext} from "../../../provider/CoinInfoContext";
import PrimaryButton from "../../primary-button/PrimaryButton";
import Chart from "../../../chart/Chart";

const CoinChart = () => {
  const { interval, setInterval } = useContext(CoinInfoContext);

  return (
    <div className={styles.body}>
      <div className={styles.modeList}>
        <PrimaryButton
          onClick={() => setInterval("m1")}
          disabled={interval == "m1"}
          text={"24H"}
        />
        <PrimaryButton
          onClick={() => setInterval("m15")}
          disabled={interval == "m15"}
          text={"7D"}
        />
        <PrimaryButton
          onClick={() => setInterval("h1")}
          disabled={interval == "h1"}
          text={"1M"}
        />
      </div>
      <div>
          <Chart/>
      </div>
    </div>
  );
};

export default CoinChart;
