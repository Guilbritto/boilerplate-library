import { render, screen } from '../../../lib/test-utils'

import TagComponent from '../TagComponent'

describe('<TagComponent />', () => {
    it('should render the component', () => {
        const { container } = render(<TagComponent label="teste" />)

        expect(container.firstChild).toMatchSnapshot()
    })
})
