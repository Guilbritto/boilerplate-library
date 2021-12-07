import styled, { css, keyframes } from 'styled-components'

interface ButtonStyleProps {
    isDisabled: boolean
    buttonSize: 'large' | 'small'
    buttonType: 'primary' | 'secondary' | 'disabled' | 'danger'
}

const buttonTypes = {
    primary: css`
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.neutral.white};
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }
        svg {
            fill: ${props => props.theme.colors.neutral.white};
        }
    `,
    secondary: css`
        background-color: ${props => props.theme.colors.neutral.white};
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
        &:hover {
            background-color: #d1e5ff;
        }
        svg {
            fill: ${props => props.theme.colors.primary};
        }
    `,
    danger: css`
        background-color: ${props => props.theme.colors.suport.error};
        color: ${props => props.theme.colors.neutral.white};
        cursor: pointer;
        &:hover {
            background-color: #9b1c13;
        }
        svg {
            fill: ${props => props.theme.colors.neutral.white};
        }
    `,
    disabled: css`
        background-color: #eeeeee;
        color: '#AAAAA';
        cursor: not-allowed;
    `
}

export const Container = styled.button<ButtonStyleProps>`
    ${props => buttonTypes[props.buttonType]}
    ${props =>
        props.buttonSize === 'large' &&
        css`
            width: 328px;
            height: 48px;
        `}
    ${props =>
        props.buttonSize === 'small' &&
        css`
            width: auto;
            height: 32px;
            padding: 4px 12px;
        `}
    ${props =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `}
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};
    ${props => props.theme.fontTokens['200']};
    font-weight: ${props => props.theme.fontWeight.bold};
    transition: background-color 0.3s;
    svg {
        height: 20px;
        width: 20px;
    }
`

const blik = keyframes`
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`

export const Content = styled.div`
    display: flex;
    gap: 8px;
`

export const DotContaier = styled.span`
    display: inline-flex;
    align-items: center;
    line-height: 1.75rem;
    text-align: center;

    span {
        background-color: currentColor;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        animation-name: ${blik};
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        margin: 0 2px;
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.3s;
    }
`
