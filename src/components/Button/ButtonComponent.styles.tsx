import styled from 'styled-components'

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
