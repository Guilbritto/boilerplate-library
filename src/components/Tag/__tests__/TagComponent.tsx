import { render } from '../../../lib/test-utils'

import TagComponent from '../TagComponent'

describe('<TagComponent />', () => {
    it('should render the component', () => {
        const { container } = render(<TagComponent label="teste" />)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the success version', () => {
        const { container } = render(
            <TagComponent label="teste" type="success" />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})
