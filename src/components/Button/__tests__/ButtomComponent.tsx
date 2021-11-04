import ButtonComponent from '../ButtonComponent'
import { render } from '../../../lib/test-utils'

describe('Button', () => {
    it('Should be able pass to snapshot test', () => {
        const { container } = render(
            <ButtonComponent label="Teste" iconSide="left" icon="arrowRight" />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render the button with the on the right side', () => {
        const { container } = render(
            <ButtonComponent label="Teste" iconSide="right" icon="arrowRight" />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a small size', () => {
        const { container } = render(
            <ButtonComponent
                label="Teste"
                buttonSize="small"
                icon="arrowRight"
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a secondary version', () => {
        const { container } = render(
            <ButtonComponent
                label="Teste"
                buttonType="secondary"
                icon="arrowRight"
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a danger version', () => {
        const { container } = render(
            <ButtonComponent
                label="Teste"
                buttonType="danger"
                icon="download"
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render a disabled button', () => {
        const { container } = render(
            <ButtonComponent label="Teste" disabled icon="download" />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
