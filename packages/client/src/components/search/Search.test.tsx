import {render, screen} from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

const setSearchInfo = jest.fn()
const onClick = jest.fn()

describe('Search Tests', () => {
    test('Snapshot test', () => {
        render(
            <Search onClick={onClick} searchInfo={''} setSearchInfo={setSearchInfo}/>
        )
        const search = screen.queryByTestId('search')
        expect(search).toMatchSnapshot()
    })
    test('Action test', async () => {
        render(
            <Search onClick={onClick} searchInfo={'coin'} setSearchInfo={setSearchInfo}/>
        )
        const button = screen.queryByTestId('search-button')
        if (button) {
            await userEvent.click(button)
            expect(onClick).toHaveBeenCalled()
        }
    })
})