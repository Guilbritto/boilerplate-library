import { render, screen } from '../../../lib/test-utils'

import SwitchComponent from '../SwitchComponent'

describe('<SwitchComponent />', () => {
    it('Should be able to render a not active switch', () => {
        const { container } = render(<SwitchComponent isChecked={false} />)

        expect(container.firstChild).toMatchSnapshot()
    })
    it('Should be able to render a active switch', () => {
        const { container } = render(<SwitchComponent isChecked={true} />)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be able to render disabled switch', () => {
        const { container } = render(
            <SwitchComponent isChecked={false} disabled />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})
