import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { BsDownload } from 'react-icons/bs'

import { Container, Content, DotContaier } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'
import { useTheme } from '../../hooks/useTheme'

const ButtonComponent = ({
    icon,
    iconSide = 'right',
    label,
    loading,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    width,
    buttonSize = 'large',
    buttonType = 'primary',
    disabled,
    ...rest
}: ButtonProps) => {
    const theme = useTheme()

    const ButtonIcons = {
        arrowRight: <BiRightArrowAlt />,
        download: <BsDownload />
    }

    return (
        <Container
            theme={theme}
            isDisabled={loading ? true : disabled}
            buttonSize={buttonSize}
            buttonType={disabled ? 'disabled' : buttonType}
            disabled={loading ? true : disabled}
            style={{
                marginBottom,
                marginLeft,
                marginRight,
                marginTop,
                width
            }}
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
                <Content>
                    {icon && iconSide === 'left' && ButtonIcons[icon]}

                    {label}

                    {icon && iconSide === 'right' && ButtonIcons[icon]}
                </Content>
            )}
        </Container>
    )
}

export default ButtonComponent
