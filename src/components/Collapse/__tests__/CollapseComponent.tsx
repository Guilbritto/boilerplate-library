import { render, screen, fireEvent } from '../../../lib/test-utils'
import 'jest-styled-components'
import CollapseComponent from '../CollapseComponent'

describe('<CollapseComponent />', () => {
    it('should render the collapse component without beeing opened at start', () => {
        const { container } = render(
            <CollapseComponent title="Collapse" quantity={4} widthSize={100}>
                <div>Content 1</div>
                <div>Content 2</div>
            </CollapseComponent>
        )

        expect(screen.getByTestId('Children')).toHaveStyle('max-height: 0')

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the collapse component beeing opened at start', () => {
        const { container } = render(
            <CollapseComponent
                title="Collapse"
                quantity={4}
                widthSize={100}
                opened={true}
            >
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </CollapseComponent>
        )

        expect(screen.getByTestId('Children')).toHaveStyle('max-height: 16rem')

        expect(container.firstChild).toMatchSnapshot()
    })

    it('IconArea click to open/close collapse children', () => {
        render(
            <CollapseComponent title="Collapse" quantity={4} widthSize={100}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </CollapseComponent>
        )

        expect(screen.getByTestId('Children')).toHaveStyle('max-height: 0')

        const button = screen.getByTestId('IconButton')

        fireEvent.click(button)

        expect(screen.getByTestId('Children')).toHaveStyle('max-height: 16rem')

        fireEvent.click(button)

        expect(screen.getByTestId('Children')).toHaveStyle('max-height: 0')
    })
})
