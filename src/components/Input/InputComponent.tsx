import React, { useEffect, useRef, useState } from 'react'

import {
    Container,
    AlertMessage,
    Input,
    Label,
    Svg
} from './InputComponent.styles'
import { InputProps } from './InputComponent.types'

import { Eye } from '@svg/Eye'
import { EyeOff } from '@svg/EyeOff'
import { AlertCircle } from '@svg/AlertCircle'
import { useTheme } from '../../hooks/ThemeContext'

const InputComponent = ({
    variant = 'text',
    label,
    error,
    type = 'text',
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
    customOnChange,
    ...rest
}: InputProps) => {
    const [isActive, setIsActive] = useState(false)
    const [isEyeOn, setIsEyeOn] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const theme = useTheme()

    useEffect(() => {
        if (inputRef.current?.value && inputRef.current.value != '') {
            setIsActive(true)
        }
    })

    useEffect(() => {
        if (!!error && error.message) {
            setIsActive(true)
        }
    }, [error, inputRef])

    const heandleFocus = () => {
        setIsActive(true)
        inputRef.current?.focus()
    }

    const handleBlur = () => {
        if (inputRef.current?.value.length === 0) {
            setIsActive(false)
        }
    }

    const handleEyeClick = () => {
        setIsEyeOn(!isEyeOn)
        if (isEyeOn) {
            inputRef.current?.setAttribute('type', 'text')
        } else {
            inputRef.current?.setAttribute('type', 'password')
        }
    }

    return (
        <div
            style={{
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                width
            }}
        >
            <Container
                variant={variant}
                onClick={heandleFocus}
                onBlur={handleBlur}
                data-testid="input-container"
                theme={theme}
            >
                <Input
                    isActive={isActive}
                    isEyeOn={isEyeOn && variant === 'password'}
                    error={!!(error && error.message)}
                    theme={theme}
                >
                    <input
                        data-testid="input"
                        ref={inputRef}
                        type={variant === 'password' ? 'password' : 'text'}
                        {...rest}
                    />
                    {variant === 'password' && (
                        <Svg
                            theme={theme}
                            onClick={() => handleEyeClick()}
                            data-testid="input-eye"
                        >
                            {isEyeOn ? Eye : EyeOff}
                        </Svg>
                    )}
                </Input>
                <Label
                    theme={theme}
                    isActive={isActive}
                    error={!!(error && error.message)}
                    data-testid="input-label"
                >
                    {label}
                </Label>
            </Container>
            {error && error.message && (
                <AlertMessage theme={theme} data-testid="input-errorMessage">
                    {AlertCircle}
                    {error?.message}
                </AlertMessage>
            )}
        </div>
    )
}

export default InputComponent
