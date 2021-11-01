import React from 'react'

import CheckboxComponent from './CheckboxComponent'

export default {
    title: 'CheckboxComponent',
    component: CheckboxComponent
}

export const Default = () => {
    const [checked, setChecked] = React.useState(false)
    return <CheckboxComponent isChecked={checked} setIsChecked={setChecked} />
}
export const Minus = () => {
    const [checked, setChecked] = React.useState(false)
    return (
        <CheckboxComponent
            icon="minus"
            isChecked={checked}
            setIsChecked={setChecked}
        />
    )
}

export const Disabled = () => {
    const [checked, setChecked] = React.useState(false)
    return (
        <CheckboxComponent
            isChecked={checked}
            setIsChecked={setChecked}
            disabled
        />
    )
}
