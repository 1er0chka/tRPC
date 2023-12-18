import {render, screen} from "@testing-library/react";
import Pagination from "./Pagination";

const itemsNumber = 40
const refreshTable = jest.fn()

describe('Pagination Tests', () => {
    test('Snapshot test', () => {
        render(
            <Pagination itemsNumber={itemsNumber}  refreshTable={refreshTable}/>
        )
        const pagination = screen.queryByTestId('pagination')
        expect(pagination).toMatchSnapshot()
    })
    test('Back test', () => {
        render(
            <Pagination itemsNumber={itemsNumber}  refreshTable={refreshTable}/>
        )
        const button = screen.queryByTestId('back-button')
        if (button){
            button.click()
        }
    })
    test('Forward test', () => {
        render(
            <Pagination itemsNumber={itemsNumber}  refreshTable={refreshTable}/>
        )
        const button = screen.queryByTestId('forward-button')
        if (button){
            button.click()
        }
    })
})