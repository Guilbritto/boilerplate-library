import { fireEvent, render } from '../../../lib/test-utils'

import DropdownComponent from '../DropdownComponent'
import { DropdownItem } from '../DropdownComponent.types'

describe('<DropdownComponent />', () => {
    it('should render the component', () => {
        const { container } = render(
            <DropdownComponent
                selectedItem={{} as DropdownItem}
                setSelectedItem={() => {}}
                title="Componente Teste"
                items={[
                    {
                        id: 1,
                        value: 'Testando 123...'
                    }
                ]}
            />
        )

        expect(container.firstChild).toMatchSnapshot()
    })
    it('should be able to click on component', () => {
        const { container } = render(
            <DropdownComponent
                selectedItem={{} as DropdownItem}
                setSelectedItem={() => {}}
                title="Componente Teste"
                items={[
                    {
                        id: 1,
                        value: 'Testando 123...'
                    }
                ]}
            />
        )
        fireEvent.click(container.firstChild)
        expect(container.firstChild).toMatchSnapshot()
    })
})
