import React from 'react'
import { Container, DotContaier } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'
import { ArrowRight } from '@svg/ArrowRight'
import { useTheme } from '../../hooks/useTheme'
import {BiRightArrowAlt} from 'react-icons/bi'

const ButtonComponent = ({
    icon,
    iconSide='right',
    label,
    loading,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    width,
    buttonSize="large",
    buttonType="primary",
    disabled,
    ...rest
}: ButtonProps) => {
    const theme = useTheme()
    const ButtonIcons = {
        arrowRight: <BiRightArrowAlt />
    }

    return (
        <Container
            theme={theme}
            isDisabled={loading ? true : disabled}
            buttonSize={buttonSize}
            buttonType={disabled ? 'disabled' : buttonType}
            style={{
                marginBottom,
                marginLeft,
                marginRight,
                marginTop,
                width
            }}
            disabled={loading ? true : disabled}
            {...rest}
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
