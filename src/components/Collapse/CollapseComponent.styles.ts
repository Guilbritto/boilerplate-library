import styled from 'styled-components'
import {
    ContainerChildrenProps,
    ContainerProps
} from './CollapseComponent.types'

export const Container = styled.div<ContainerProps>`
    border: 0.5px solid ${props => props.theme.colors.neutral.soft};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px;
    width: ${props => props.widthSize}%;
`

export const ContainerChildren = styled.div<ContainerChildrenProps>`
    display: ${props => (props.collapse ? 'none' : 'block')};
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
`
