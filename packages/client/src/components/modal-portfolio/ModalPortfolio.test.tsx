import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalPortfolio from "./ModalPortfolio";
import {PortfolioCoin} from "../../types/coin";
import 'jest-localstorage-mock';

const setVisible = jest.fn()
const portfolioRefresh = jest.fn()

const portfolio: PortfolioCoin[] = [{
    id: 'test',
    number: 2,
    oldPrice: 109.1,
    newPrice: 111.1,
    difference: 0.1,
    name: 'Test',
    symbol: 'TST'
}]

describe('Modal Portfolio Test', () => {
    test('Snapshot test', () => {
        render(
            <ModalPortfolio isVisible={true} setVisible={setVisible} portfolioRefresh={portfolioRefresh}/>
        )
        const modal = screen.queryByTestId('portfolio-modal')
        expect(modal).toMatchSnapshot()
    })
    test('Delete Item Test', async () => {
        localStorage.setItem("portfolio", JSON.stringify(portfolio));
        render(
            <ModalPortfolio isVisible={true} setVisible={setVisible} portfolioRefresh={portfolioRefresh}/>
        )
        const button = screen.queryByTestId('delete-test')
        if (button) {
            await userEvent.click(button)
        }
    })
})
