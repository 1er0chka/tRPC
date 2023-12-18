import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from "./Button";

const onClick = jest.fn()

describe('Button Test', () => {
    test('Snapshot test', () => {
        render(
            <Button onClick={onClick} label={'Test'} mode={'primary'} dataTestId={'button'}/>
        )
        const button = screen.queryByTestId('button')
        expect(button).toMatchSnapshot()
    })
    test('Action test primary button', async () => {
        render(
            <Button onClick={onClick} label={'Test'} mode={'primary'} disabled={false}/>
        )
        const button = screen.queryByTestId('button')
        if (button) {
            await userEvent.click(button)
            expect(onClick).toHaveBeenCalled()
        }
    })
    test('Action test secondary button', async () => {
        render(
            <Button onClick={onClick} label={'Test'} mode={'secondary'}/>
        )
        const button = screen.queryByTestId('button')
        if (button) {
            await userEvent.click(button)
            expect(onClick).toHaveBeenCalled()
        }
    })
})
