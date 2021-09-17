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
import { DefaultTheme, withTheme } from 'styled-components'

const InputComponent = ({
    value,
    variant = 'text',
    label,
    error,
    type = 'text',
    theme,
    customOnChange,
    ...rest
}: InputProps) => {
    const [isActive, setIsActive] = useState(false)
    const [inputText, setInputText] = useState(value || '')
    const [isEyeOn, setIsEyeOn] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

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
            >
                <Input
                    {...rest}
                    isActive={isActive}
                    isEyeOn={isEyeOn && variant === 'password'}
                    error={!!error}
                >
                    <input
                        value={inputText}
                        data-testid="input"
                        onChange={evt => handleChange(evt)}
                        ref={inputRef}
                        type={variant === 'password' ? 'password' : 'text'}
                    />
                    {variant === 'password' && (
                        <Svg
                            onClick={() => handleEyeClick()}
                            data-testid="input-eye"
                        >
                            {isEyeOn ? Eye : EyeOff}
                        </Svg>
                    )}
                </Input>
                <Label
                    isActive={isActive}
                    error={!!error}
                    data-testid="input-label"
                >
                    {label}
                </Label>
            </Container>
            {error && (
                <AlertMessage data-testid="input-errorMessage">
                    {AlertCircle}
                    {error?.message}
                </AlertMessage>
            )}
        </>
    )
}

export default withTheme(InputComponent)
