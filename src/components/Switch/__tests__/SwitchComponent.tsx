import { fireEvent, render, screen } from '../../../lib/test-utils'

import SwitchComponent from '../SwitchComponent'

describe('<SwitchComponent />', () => {
    it('Should be able to click and change state from not checked to checked', () => {
        let checked = false
        const setChecked = (check: boolean) => (checked = check)

        const { getByTestId } = render(
            <SwitchComponent isChecked={checked} setIsChecked={setChecked} />
        )

        const switchButton = getByTestId('switch-button')
        const switchButtonAura = getByTestId('switch-button-aura')

        fireEvent.mouseDown(switchButtonAura)
        fireEvent.mouseUp(switchButtonAura)

        fireEvent.click(switchButton)

        expect(checked).toBe(true)
    })

    it('Should be able to render the switch buttom with pressed Down and show aura', () => {
        const { getByTestId } = render(<SwitchComponent isChecked={false} />)

        const switchButtonAura = getByTestId('switch-button-aura')

        fireEvent.mouseDown(switchButtonAura)

        expect(switchButtonAura).toMatchSnapshot()
    })

    it('Should be able to render the switch buttom with pressed Up and show aura', () => {
        const { getByTestId } = render(<SwitchComponent isChecked={false} />)

        const switchButtonAura = getByTestId('switch-button-aura')

        fireEvent.mouseUp(switchButtonAura)

        expect(switchButtonAura).toMatchSnapshot()
    })

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
