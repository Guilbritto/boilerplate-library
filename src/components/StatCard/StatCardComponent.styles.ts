import styled, { css, keyframes } from 'styled-components'

import { StatCardProps } from './StatCardComponent.types'

type ContainerProps = Pick<StatCardProps, 'variation'>

type ProgressProps = {
    percentage: number
}

const containerModifiers = {
    primary: () => css`
        background: linear-gradient(
            107.03deg,
            #368595 8.33%,
            #509cab 59.14%,
            #8ed1df 102.12%
        );
    `,
    secondary: () => css`
        background: linear-gradient(110.96deg, #f08249 9.08%, #ffb876 108.4%);
    `
}

const progress = (percentage: number) => keyframes`
  0%{
     width: 0%;
   }
   100%{
       width: ${percentage}%;
   }
`

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    padding: 8px 12px 16px;
    border-radius: 8px;
    max-width: 268px;
    max-height: 160px;
    ${props => containerModifiers[props.variation!]};
`

export const Title = styled.span`
    font-family: inherit;
    width: 85%;
    text-transform: uppercase;
    margin-bottom: 4px;
    ${props => props.theme.fontTokens['75']};
    color: ${props => props.theme.colors.neutral.white};
`

export const Subtitle = styled.span`
    font-family: inherit;
    margin-bottom: 16px;
    ${props => props.theme.fontTokens['50']};
    color: ${props => props.theme.colors.neutral.white};
`

export const Quantity = styled.span`
    font-family: inherit;
    ${props => props.theme.fontTokens['600']};
    color: ${props => props.theme.colors.neutral.white};
`

export const ProgressContainer = styled.div`
    position: relative;
    min-height: 6px;
    margin: 8px 0 12px;
    background-color: ${props => props.theme.colors.neutral.white};
    width: 100%;
    border-radius: 15px;
`

export const Progress = styled.div<ProgressProps>`
    position: absolute;
    background-color: ${props => props.theme.colors.suport.success};
    width: ${props => props.percentage}%;
    height: 100%;
    border-radius: 15px;
    animation: ${props => progress(props.percentage)} 0.8s ease-in-out;
`

export const Link = styled.a`
    display: inline-block;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #fff;
        transition: width 0.3s;
    }

    &:hover::after {
        width: 100%;
    }
`
