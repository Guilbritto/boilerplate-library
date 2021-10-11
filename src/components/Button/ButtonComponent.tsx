import React from 'react'
import { Container, DotContaier } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'
import { ArrowRight } from '@svg/ArrowRight'
import { useTheme } from '../../hooks/useTheme'

const ButtonComponent = ({
    icon,
    iconSide,
    label,
    loading,
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
            isDisabled={loading}
            disabled={loading}
            style={{
                marginBottom,
                marginLeft,
                marginRight,
                marginTop,
                width
            }}
            {...rest}
            onClick={() => alert('oi')}
        >
            {loading ? (
                <>
                    <DotContaier>
                        <span className="dot" key={`dot_1`} />
                        <span className="dot" key={`dot_2`} />
                        <span className="dot" key={`dot_3`} />
                    </DotContaier>
                </>
            ) : (
                <>
                    {icon && iconSide === 'left' && ButtonIcons[icon]}
                    {label}
                    {icon && iconSide === 'right' && ButtonIcons[icon]}
                </>
            )}
        </Container>
    )
}

export default ButtonComponent
