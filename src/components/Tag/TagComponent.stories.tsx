import React from 'react'

import TagComponent from './TagComponent'
import { TagProps } from './TagComponent.types'

export default {
    title: 'TagComponent',
    component: TagComponent
}

export const Default = (args: JSX.IntrinsicAttributes & TagProps) => (
    <TagComponent {...args} />
)
