import { render } from '../../../lib/test-utils'

import StatCardComponent from '../StatCardComponent'
import { Link } from '../StatCardComponent.styles'

const args = {
    title: 'Title',
    subtitle: 'Subtitle',
    quantity: 8,
    total: 10
}

const Children = () => (
    <div>
        <Link>Children</Link>
    </div>
)

describe('<StatCardComponent />', () => {
    it('Should render the primary variation by default', () => {
        const { container } = render(<StatCardComponent {...args} />)

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render the secondary variation', () => {
        const { container } = render(
            <StatCardComponent {...args} variation="secondary" />
        )

        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should render with children', () => {
        const { container } = render(
            <StatCardComponent {...args} children={<Children />} />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
})
