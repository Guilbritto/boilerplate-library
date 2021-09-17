import React from 'react'
import { Container } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'
import { ArrowRight } from '@svg/ArrowRight'
import { useTheme } from '../../hooks/ThemeContext'

const ButtonComponent = ({ icon, iconSide, label }: ButtonProps) => {
    const theme = useTheme()
    const ButtonIcons = {
        arrowRight: ArrowRight
    }

    return (
        <Container theme={theme}>
            {icon && iconSide === 'left' && ButtonIcons[icon]}
            {label}
            {icon && iconSide === 'right' && ButtonIcons[icon]}
        </Container>
    )
}

export default ButtonComponent
