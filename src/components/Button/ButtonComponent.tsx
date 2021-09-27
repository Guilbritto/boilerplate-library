import React from 'react'
import { Container } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'
import { ArrowRight } from '@svg/ArrowRight'
import { useTheme } from '../../hooks/useTheme'

const ButtonComponent = ({
    icon,
    iconSide,
    label,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    width,
    ...rest
}: ButtonProps) => {
    const theme = useTheme()
    const ButtonIcons = {
        arrowRight: ArrowRight
    }

    return (
        <Container
            theme={theme}
            style={{
                marginBottom,
                marginLeft,
                marginRight,
                marginTop,
                width
            }}
            {...rest}
        >
            {icon && iconSide === 'left' && ButtonIcons[icon]}
            {label}
            {icon && iconSide === 'right' && ButtonIcons[icon]}
        </Container>
    )
}

export default ButtonComponent
