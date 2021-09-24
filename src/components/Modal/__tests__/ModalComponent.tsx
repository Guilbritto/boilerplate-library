import { render, screen } from '../../../lib/test-utils'

import ModalComponent from '../ModalComponent'

describe('<ModalComponent />', () => {
  it('should render the component', () => {
    const { container } = render(<ModalComponent />)

    expect(screen.getByRole('heading', { name: /Modal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
