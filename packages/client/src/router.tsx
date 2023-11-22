import {BrowserRouter, Route, Routes} from "react-router-dom"
import CoinsTablePage from "./pages/coins-table-page/CoinsTablePage";
import CurrencyCoinPage from "./pages/currency-coin-page/CurrencyCoinPage";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<CoinsTablePage/>} path={'/'}/>
            <Route element={<CurrencyCoinPage/>} path="/:currencyId"/>
        </Routes>
    </BrowserRouter>
}

export default Router