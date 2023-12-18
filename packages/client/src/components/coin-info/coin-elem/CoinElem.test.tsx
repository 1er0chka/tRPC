import {render, screen} from "@testing-library/react";
import CoinElem from "./CoinElem";
import {Coin} from "../../../../../../types/coin";

const coin:Coin = {
    changePercent24Hr: "-0.8101417214350335",
    id: "bitcoin",
    marketCapUsd: "119179791817.6740161068269075",
    maxSupply: "21000000.0000000000000000",
    name: "Bitcoin",
    priceUsd: "6931.5058555666618359",
    rank: "1",
    supply: "17193925.0000000000000000",
    symbol: "BTC"
}

jest.mock('react', () => {
    const actual = jest.requireActual('react')
    return {
        __esModule: true,
        ...actual,
        useContext: () => {
            return {
                coin
            }
        }
    }
})

describe('Coin Elem Tests', () => {
    test('Snapshot test', () => {
        render(
            <CoinElem/>
        )
        const data = screen.queryByTestId('coin-elem')
        expect(data).toMatchSnapshot()
    })
})