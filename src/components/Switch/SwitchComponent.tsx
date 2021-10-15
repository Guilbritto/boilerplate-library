import React, { useState } from 'react'

import { Container, CircleAura, Circle } from './SwitchComponent.styles'
import { SwitchProps } from './SwitchComponent.types'
import { useTheme } from '../../hooks/useTheme'
const SwitchComponent = ({
    isChecked,
    setIsChecked,
    disabled
}: SwitchProps) => {
    const [mouseDown, setMouseDown] = useState(false)
    const [mouseUp, setMouseUp] = useState(false)
    const theme = useTheme()

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMouseDown(false)
        setMouseUp(true)
    }

    const handleMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setMouseDown(true)
        setMouseUp(false)
    }

    const handleOnClick = () => {
        setIsChecked(!isChecked)
        setMouseDown(false)
        setMouseUp(false)
    }

    return (
        <Container
            isActive={isChecked}
            onClick={handleOnClick}
            disabled={disabled || false}
            theme={theme}
        >
            <CircleAura
                isActive={isChecked}
                disabled={disabled || false}
                isMouseDown={mouseDown}
                isMouseUp={mouseUp}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                theme={theme}
            >
                <Circle
                    theme={theme}
                    isActive={isChecked}
                    disabled={disabled || false}
                />
            </CircleAura>
        </Container>
    )
}

export default SwitchComponent
