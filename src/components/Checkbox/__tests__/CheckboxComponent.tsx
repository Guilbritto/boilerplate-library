import { render, screen } from '../../../lib/test-utils'

import CheckboxComponent from '../CheckboxComponent'

describe('<CheckboxComponent />', () => {
    it('should render the component', () => {
        const { container } = render(<CheckboxComponent checked />)

        expect(container.firstChild).toMatchSnapshot()
    })
})
