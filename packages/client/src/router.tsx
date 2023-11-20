import {BrowserRouter, Route, Routes} from "react-router-dom"
import CoinsTablePage from "./pages/coins-table-page/CoinsTablePage";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<CoinsTablePage/>} path={'/'}/>
        </Routes>
    </BrowserRouter>
}

export default Router