import React from 'react'

import Switch from '../SwitchComponent'
import { fireEvent, render } from '../../../lib/test-utils'

const handleClick = jest.fn()

describe('Switch Component', () => {
    it('Should render a Switch with default styles', () => {
        const { container } = render(<Switch onClick={handleClick} />)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a checked Switch', () => {
        const { container } = render(
            <Switch checked={true} onClick={handleClick} />
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a disabled Switch', () => {
        const { getByRole, container } = render(
            <Switch disabled={true} onClick={handleClick} />
        )

        const input = getByRole('checkbox')

        expect(input).toHaveStyle('cursor: not-allowed')
        expect(container.firstChild).toMatchSnapshot()
    })
})
