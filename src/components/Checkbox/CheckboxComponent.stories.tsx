import React from 'react'

import CheckboxComponent from './CheckboxComponent'

export default {
    title: 'CheckboxComponent',
    component: CheckboxComponent
}

export const Default = () => <CheckboxComponent />
export const Disabled = () => <CheckboxComponent checked={true} disabled />
