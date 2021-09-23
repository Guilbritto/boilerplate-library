import ButtonComponent from '../ButtonComponent'
import { render } from '../../../lib/test-utils'

describe('Button', () => {
    it('Should be able pass to snapshot test', () => {
        const { container } = render(
            <ButtonComponent label="Teste" iconSide="left" icon="arrowRight" />
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
