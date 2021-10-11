import styled, { keyframes } from 'styled-components'

export const Container = styled.button`
    background-color: ${props => props.theme.colors.primary};
    width: 328px;
    height: 48px;

    border-style: none;

    color: ${props => props.theme.colors.neutral.white};
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${props => props.theme.borderRadius};
    ${props => props.theme.fontTokens['200']};
    font-weight: ${props => props.theme.fontWeight.bold};
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
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
