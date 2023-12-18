import {render, screen} from "@testing-library/react";
import CoinData from "./CoinData";

describe('Coin Data Tests', () => {
    test('Snapshot test', () => {
        render(
            <CoinData secondaryInfo={'Secondary info'} primaryInfo={'Primary info'}/>
        )
        const data = screen.queryByTestId('coin-data')
        expect(data).toMatchSnapshot()
    })
    test('Empty test', () => {
        render(
            <CoinData secondaryInfo={"$NaN"} primaryInfo={'Primary info'}/>
        )
        const data = screen.queryByTestId('coin-data')
        expect(data).toMatchSnapshot()
    })
})