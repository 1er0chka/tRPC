import Router from "./router";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import {CoinInfoProvider} from "./provider/CoinInfoContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <CoinInfoProvider>
            <Router/>
        </CoinInfoProvider>
    </React.StrictMode>
);
