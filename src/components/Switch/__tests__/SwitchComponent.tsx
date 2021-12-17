import React from 'react'

import Switch from '../SwitchComponent'
import { render } from '../../../lib/test-utils'

const handleChange = jest.fn()

describe('Switch Component', () => {
    it('Should render a Switch with default styles', () => {
        const { container } = render(<Switch onChange={handleChange} />)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a checked Switch', () => {
        const { container } = render(
            <Switch checked={true} onChange={handleChange} />
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a disabled Switch', () => {
        const { getByRole, container } = render(
            <Switch disabled={true} onChange={handleChange} />
        )

        const input = getByRole('checkbox')

        expect(input).toHaveStyle('cursor: not-allowed')
        expect(container.firstChild).toMatchSnapshot()
    })
})
