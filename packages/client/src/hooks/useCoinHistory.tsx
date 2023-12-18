import React, {useState, useContext} from 'react';
import {CoinInfoContext} from '../provider/CoinInfoContext';
import client from '../client/client';

const useCoinHistory = () => {
    const {coin, interval, setTime, setPrice} = useContext(CoinInfoContext);
    const getHistory = async () => {
        client.history.getById.mutate({id: coin.id, interval: interval})
            .then((data) => {
                const x: string[] = [];
                const y: number[] = [];
                switch (interval) {
                    case "m1": {
                        data.map((time) => {
                            x.push(
                                new Date(parseInt(time.time)).getUTCHours().toString() +
                                ":" +
                                new Date(parseInt(time.time)).getUTCMinutes().toString(),
                            );
                            y.push(parseFloat(time.priceUsd));
                        });
                        break;
                    }
                    default: {
                        data.map((time) => {
                            x.push(
                                new Date(parseInt(time.time)).getUTCDay().toString() +
                                "." +
                                new Date(parseInt(time.time)).getUTCMonth().toString() +
                                " " +
                                new Date(parseInt(time.time)).getUTCHours().toString() +
                                ":" +
                                new Date(parseInt(time.time)).getUTCMinutes().toString(),
                            );
                            y.push(parseFloat(time.priceUsd));
                        });
                        break;
                    }
                }
                setTime(x)
                setPrice(y)
            })
            .catch((error) => {
                console.error(error)
            })
    };


    return {getHistory};
};

export default useCoinHistory