import Router from "./router";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
            <Router/>
    </React.StrictMode>
);
