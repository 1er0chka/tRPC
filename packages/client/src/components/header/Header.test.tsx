import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {Coin} from "../../../../../types/coin";
import Header from "./Header";

const coins: Coin[] = [{
    changePercent24Hr: "-0.8101417214350335",
    id: "bitcoin",
    marketCapUsd: "119179791817.6740161068269075",
    maxSupply: "21000000.0000000000000000",
    name: "Bitcoin",
    priceUsd: "6931.5058555666618359",
    rank: "1",
    supply: "17193925.0000000000000000",
    symbol: "BTC"
}, {
    changePercent24Hr: "-2.3610937754922363",
    id: "ethereum",
    marketCapUsd: "260178024694.6417172413108697",
    maxSupply: "null",
    name: "Ethereum",
    priceUsd: "2164.5806540967609070",
    rank: "2",
    supply: "120197888.76991934",
    symbol: "ETH"
}, {
    changePercent24Hr: "-0.811417214350335",
    id: "test",
    marketCapUsd: "11179791817.6740161068269075",
    maxSupply: "2000000.0000000000000000",
    name: "test",
    priceUsd: "631.5058555666618359",
    rank: "1",
    supply: "17193925.0000000000000000",
    symbol: "TST"
}]

const refresh = jest.fn()
const portfolioSum: number = 1299.99
const portfolioDif: number = 188.32

describe('Header Test', () => {
    test('Snapshot test', () => {
        render(
            <Header coins={coins} portfolioRefresh={refresh} portfolioSum={portfolioSum} portfolioDif={portfolioDif}/>
        )
        const header = screen.queryByTestId('header')
        expect(header).toMatchSnapshot()
    })

    test('Empty test', () => {
        render(
            <Header coins={[]} portfolioRefresh={refresh} portfolioSum={portfolioSum} portfolioDif={0.0}/>
        )
        const header = screen.queryByTestId('header')
        expect(header).toMatchSnapshot()
    })

    test('User Portfolio Call Test', async () => {
        render(
            <Header coins={[]} portfolioRefresh={refresh} portfolioSum={portfolioSum} portfolioDif={portfolioDif}/>
        )
        const button = screen.queryByTestId('portfolio')
        if (button) {
            await userEvent.click(button)
        }
    })
})