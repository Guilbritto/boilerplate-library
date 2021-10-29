import React, { useEffect, useState } from 'react'
import { Check } from '@svg/Check'
import { useTheme } from '../../hooks/useTheme'
import { Container, EffectArea } from './CheckboxComponent.styles'
import { CheckboxProps } from './CheckboxComponent.types'
import { Minus } from '@svg/Minus'

const CheckboxComponent = ({
    disabled,
    icon = 'default',
    isChecked = false,
    ...rest
}: CheckboxProps) => {
    const theme = useTheme()
    const [isLocalChecked, setIsChecked] = useState(isChecked)
    const [mouseDown, setMouseDown] = useState(false)
    const [mouseUp, setMouseUp] = useState(false)

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

    useEffect(() => {
        if (rest.checked) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }, [])

    const handleClick = () => {
        if (!disabled) {
            setIsChecked(!isLocalChecked)
        }
    }

    return (
        <EffectArea
            theme={theme}
            disabled={disabled}
            mouseDown={mouseDown}
            mouseUp={mouseUp}
        >
            <Container
                icon={icon}
                theme={theme}
                disabled={disabled}
                onClick={handleClick}
                isChecked={isLocalChecked}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                    <input
                        type="checkbox"
                        checked={isLocalChecked}
                        disabled={disabled}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        {...rest}
                    />
                    {isChecked &&
                        !disabled &&
                        (icon === 'default' ? Check : Minus)}
                </div>
            </Container>
        </EffectArea>
    )
}

export default CheckboxComponent
