import React, { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Container, EffectArea } from './CheckboxComponent.styles'
import { CheckboxProps } from './CheckboxComponent.types'
import { BsCheckLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
const CheckboxComponent = ({
    disabled,
    icon = 'default',
    isChecked,
    setIsChecked,
    ...rest
}: CheckboxProps) => {
    const theme = useTheme()
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
            if (!disabled) {
                setIsChecked(false)
            }
        }
    }, [])

    const handleClick = () => {
        if (!disabled) {
            setIsChecked(!isChecked)
        }
    }
    console.log(isChecked)
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
                isChecked={isChecked}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <input
                    type="checkbox"
                    checked={isChecked}
                    disabled={disabled}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    {...rest}
                />
                {isChecked &&
                    !disabled &&
                    (icon === 'default' ? <BsCheckLg /> : <BiMinus />)}
            </Container>
        </EffectArea>
    )
}

export default CheckboxComponent
