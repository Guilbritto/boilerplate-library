import React from 'react'

import { useTheme } from '../../hooks/useTheme'
import { Circle, Input, Wrapper } from './SwitchComponent.styles'
import { SwitchProps } from './SwitchComponent.types'

const SwitchComponent = ({
    onChange,
    checked = false,
    disabled = false
}: SwitchProps) => {
    const theme = useTheme()

    return (
        <Wrapper theme={theme} disabled={disabled}>
            <Input
                type="checkbox"
                value="switch"
                theme={theme}
                disabled={disabled}
                onChange={onChange}
                checked={checked}
            />
            <Circle theme={theme} disabled={disabled} />
        </Wrapper>
    )
}

export default SwitchComponent
