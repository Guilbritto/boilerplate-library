import React, { useState } from 'react'

import SwitchComponent from './SwitchComponent'

export default {
    title: 'SwitchComponent',
    component: SwitchComponent
}

export const Default = args => {
    const { checked } = args

    const [isChecked, setIsChecked] = useState(checked)

    const handleChange = () => setIsChecked(!isChecked)

    return (
        <SwitchComponent
            {...args}
            checked={isChecked}
            onChange={handleChange}
        />
    )
}
