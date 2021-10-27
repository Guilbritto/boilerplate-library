import { render, screen } from '../../../lib/test-utils'

import CollapseComponent from '../CollapseComponent'

describe('<CollapseComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<CollapseComponent />)

    expect(screen.getByRole('heading', { name: /Collapse/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
