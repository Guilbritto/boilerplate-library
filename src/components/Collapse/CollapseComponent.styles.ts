import styled from 'styled-components'
import {
    ContainerChildrenProps,
    ContainerProps
} from './CollapseComponent.types'

export const Container = styled.div<ContainerProps>`
    border: 0.5px solid ${props => props.theme.colors.neutral.soft};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1.25rem;
    width: ${props => props.widthSize}%;
    height: auto;
    min-height: 4rem;
`

export const ContainerChildren = styled.div<ContainerChildrenProps>`
    transition: max-height 0.3s ease-out;
    max-height: ${props => props.maxHeight};
    margin-top: ${props => props.marginTop};
    overflow-x: hidden;
`

export const ContainerHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const IconArea = styled.div`
    cursor: pointer;
    color: ${props => props.theme.colors.neutral.soft};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    line-height: 24px;
    vertical-align: middle;
`

export const Quantity = styled.span`
    margin-left: 8px;
    ${props => props.theme.fontTokens[50]};
    line-height: 24px;
    vertical-align: middle;
    color: ${props => props.theme.colors.neutral.soft};
`

export const Title = styled.span`
    ${props => props.theme.fontTokens[100]};
    line-height: 24px;
    vertical-align: middle;
`

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
