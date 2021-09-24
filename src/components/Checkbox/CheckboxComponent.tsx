import React, { useEffect, useState } from 'react'
import { Check } from '@svg/Check'
import { useTheme } from '../../hooks/ThemeContext'
import { Container, EffectArea } from './CheckboxComponent.styles'
import { CheckboxProps } from './CheckboxComponent.types'

const CheckboxComponent = ({ disabled, ...rest }: CheckboxProps) => {
    const theme = useTheme()
    const [isChecked, setIsChecked] = useState(false)
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
            setIsChecked(!isChecked)
        }
    }

    return (
        <EffectArea theme={theme} disabled={disabled}>
            <Container
                theme={theme}
                disabled={disabled}
                onClick={handleClick}
                isChecked={isChecked}
            >
                <div>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        disabled={disabled}
                        {...rest}
                    />
                    {isChecked && !disabled && Check}
                </div>
            </Container>
        </EffectArea>
    )
}

export default CheckboxComponent
