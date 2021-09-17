import { render } from '@testing-library/react'
import ButtonComponent from '../ButtonComponent'

describe('Button', () => {
    it('Should be able pass to snapshot test', () => {
        const { container } = render(
            <ButtonComponent label="Teste" iconSide="left" icon="arrowRight" />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
