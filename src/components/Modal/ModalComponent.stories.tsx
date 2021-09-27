import React from 'react'

import ModalComponent from './ModalComponent'

export default {
    title: 'ModalComponent',
    component: ModalComponent
}

export const Default = args => (
    <ModalComponent
        renderQuery="#anchor--modalcomponent--default > div > div.docs-story.css-kdwx3d > div.css-1wjen9k > div > div > div"
        isOpen={true}
        {...args}
    />
)

export const Test = args => <ModalComponent {...args} />
