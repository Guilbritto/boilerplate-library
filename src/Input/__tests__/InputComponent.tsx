import React from 'react'
import 'jest-styled-components'
import Input from '../InputComponent'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '../../lib/test-utils'
jest.mock('@svg/AlertCircle', () => {
    return () => <></>
})

describe('Input Component', () => {
    it('Should be able to match a snapshot with false parameter', () => {
        const { container } = render(
            <Input
                label="Test"
                error={{
                    message: 'Test'
                }}
                variant="text"
            />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
    it('Should be able to match a snapshot with true parameter', () => {
        const { container } = render(
            <Input
                label="Test"
                error={{
                    message: 'Test'
                }}
                variant="password"
            />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
    it('Should be able to check the error message', () => {
        const errorMessage = 'Error Message'
        const { getByTestId } = render(
            <Input
                error={{
                    message: errorMessage
                }}
                label="Label"
                variant="password"
            />
        )
        const alertMessage = getByTestId('input-errorMessage')
        expect(alertMessage.innerHTML).toBe(errorMessage)
    })
    it('Should be not able to check the error message when message is diferent', () => {
        const errorMessage = 'Error Message'
        const { getByTestId } = render(
            <Input
                error={{
                    message: errorMessage
                }}
                label="Label"
                variant="password"
            />
        )
        const alertMessage = getByTestId('input-errorMessage')
        expect(alertMessage.innerHTML === 'Mensagem Diferente').toBeFalsy()
    })
    it('Should be able to change a value of input', () => {
        const { getByTestId } = render(
            <Input
                error={{
                    message: ''
                }}
                label="Label"
                variant="password"
                customOnChange={jest.fn}
            />
        )
        const input = getByTestId('input')
        const value = 'value'
        fireEvent.change(input, { target: { value } })
        expect((input as HTMLInputElement).value).toBe(value)
    })
    it('Should be able to click on eye', () => {
        const { getByTestId } = render(
            <Input
                error={{
                    message: ''
                }}
                label="Label"
                variant="password"
                customOnChange={jest.fn}
            />
        )
        const eye = getByTestId('input-eye')
        const input = getByTestId('input')

        fireEvent.click(eye)
        expect((input as HTMLInputElement).type).toBe('text')
        fireEvent.click(eye)
        expect((input as HTMLInputElement).type).toBe('password')
    })
    it('Should be able to click outside the input and trigger blur', () => {
        const { getByTestId } = render(
            <Input
                error={{
                    message: ''
                }}
                label="Label"
                variant="password"
            />
        )
        const input = getByTestId('input')
        input.focus()
        expect(input).toHaveFocus()
        input.blur()
        const label = getByTestId('input-label')
        expect(label).toMatchSnapshot()
    })
})
