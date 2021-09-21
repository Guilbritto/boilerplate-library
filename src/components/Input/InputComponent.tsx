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
    value,
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
    const [inputText, setInputText] = useState(value || '')
    const [isEyeOn, setIsEyeOn] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const theme = useTheme()

    useEffect(() => {
        if (inputText) {
            setIsActive(true)
        }
    })

    useEffect(() => {
        if (!!error) {
            setIsActive(true)
        }
    }, [error, inputRef])

    const heandleFocus = () => {
        setIsActive(true)
        inputRef.current?.focus()
    }

    const handleBlur = () => {
        if (inputText.length === 0) {
            setIsActive(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
        if (customOnChange) {
            customOnChange(e)
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
        <>
            <Container
                variant={variant}
                onClick={heandleFocus}
                onBlur={handleBlur}
                data-testid="input-container"
                theme={theme}
                style={{
                    marginTop,
                    marginBottom,
                    marginLeft,
                    marginRight,
                    width
                }}
            >
                <Input
                    isActive={isActive}
                    isEyeOn={isEyeOn && variant === 'password'}
                    error={!!error}
                    theme={theme}
                >
                    <input
                        value={inputText}
                        data-testid="input"
                        onChange={evt => handleChange(evt)}
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
                    error={!!error}
                    data-testid="input-label"
                >
                    {label}
                </Label>
            </Container>
            {error && (
                <AlertMessage theme={theme} data-testid="input-errorMessage">
                    {AlertCircle}
                    {error?.message}
                </AlertMessage>
            )}
        </>
    )
}

export default InputComponent
